import { headers } from 'next/headers'
import Stripe from 'stripe'
import { db } from '@/lib/db'
import { buffer } from 'micro'
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
  // Stripe sends server webhook events, it includes a signature in the 'Stripe-Signature' header. Its created by signing the payload with the webhook endpoint signing secret to sign the payload (raw HTTP body).
  const sig = req.headers['stripe-signature']

  if (!sig) return res.status(400).send('Missing the stripe signature')

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    return res.status(400).send('Webhook error' + err)
  }
  switch (event.type) {
    case 'payment_intent.created':
      const paymentIntent = event.data.object
      console.log('Payment intent was created')
      break

    case 'charge.succeeded':
      const charge = event.data.object as Stripe.Charge
      if (typeof charge.payment_intent === 'string') {
        const order = await db.order.update({
          where: { paymentIntentID: charge.payment_intent },
          data: { status: 'completed' }
        })
      }
      break
    default:
      console.log('Unhandled event type:' + event.type)
  }
  // Stripe:

  res.json({ received: true })
}
