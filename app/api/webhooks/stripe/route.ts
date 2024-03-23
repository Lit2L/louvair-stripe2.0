import { headers } from 'next/headers'
import Stripe from 'stripe'
import { buffer } from 'micro'

// import { env } from '../env.mjs'
import { db } from '@/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false
  }
}

const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  apiVersion: '2023-10-16'
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const buf = await buffer(req)
  const sig = req.headers['stripe-signature']

  if (!sig) return res.status(400).send('Missing the stripe signature')

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    return res.status(400).send('Webhook error' + err)
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === 'customer.subscription.') {
    // Retrieve the subscription details from Stripe.
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

    // Update the user stripe into in our database.
    // Since this is the initial subscription, we need to update
    // the subscription id and customer id.
    await db.user.update({
      where: {
        id: session?.metadata?.userId
      },
      data: {
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
      }
    })
  }

  if (event.type === 'invoice.payment_succeeded') {
    // Retrieve the subscription details from Stripe.
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

    // Update the price id and set the new period end.
    await db.user.update({
      where: {
        stripeSubscriptionId: subscription.id
      },
      data: {
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
      }
    })
  }

  return new Response(null, { status: 200 })
}
