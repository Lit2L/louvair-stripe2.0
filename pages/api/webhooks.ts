import Stripe from 'stripe'
import { db } from '@/lib/db'
import { buffer } from 'micro'
import Cors from 'micro-cors'
import { NextApiRequest, NextApiResponse } from 'next'

// Required to disable body parser, otherwise we get an error from Stripe.
export const config = {
  api: {
    bodyParser: false
  }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15'
})

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!

const cors = Cors({
  allowMethods: ['POST', 'HEAD']
})

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
    } catch (err: any) {
      // On error, log and return the error message.
      console.log(`❌ Error message: ${err.message}`)
      res.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    // Successfully constructed event.
    console.log('✅ Success:', event.id)

    // Cast event data to Stripe object.
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      console.log(`💰 PaymentIntent status: ${paymentIntent.status}`)
    } else if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      console.log(`❌ Payment failed: ${paymentIntent.last_payment_error?.message}`)
    } else if (event.type === 'charge.succeeded') {
      const charge = event.data.object as Stripe.Charge
      console.log(`💵 Charge id: ${charge.id}`)
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
    }

    // Return a response to acknowledge receipt of the event.
    res.json({ received: true })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default cors(webhookHandler as any)

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const buf = await buffer(req)

//   const sig = req.headers['stripe-signature']

//   if (!sig) return res.status(400).send('Missing the stripe signature')

//   let event: Stripe.Event

//   try {
//     event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!)
//   } catch (err) {
//     return res.status(400).send('Webhook error' + err)
//   }

//   const session = event.data.object as Stripe.Checkout.Session

//   if (event.type === 'checkout.session.completed') {
//     // Retrieve the subscription details from Stripe.
//     const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

//     // Update the user stripe into in our database.
//     // Since this is the initial subscription, we need to update
//     // the subscription id and customer id.
//     await db.user.update({
//       where: {
//         id: session?.metadata?.userId
//       },
//       data: {
//         stripeSubscriptionId: subscription.id,
//         stripeCustomerId: subscription.customer as string,
//         stripePriceId: subscription.items.data[0].price.id,
//         stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
//       }
//     })
//   }

//   if (event.type === 'invoice.payment_succeeded') {
//     // Retrieve the subscription details from Stripe.
//     const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

//     // Update the price id and set the new period end.
//     await db.user.update({
//       where: {
//         stripeSubscriptionId: subscription.id
//       },
//       data: {
//         stripePriceId: subscription.items.data[0].price.id,
//         stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
//       }
//     })
//   }

//   switch (event.type) {
//     case 'payment_intent.created':
//       const paymentIntent = event.data.object
//       console.log('Payment intent was created')
//       break

//     case 'charge.succeeded':
//       const charge = event.data.object as Stripe.Charge
//       if (typeof charge.payment_intent === 'string') {
//         const order = await db.order.update({
//           where: { paymentIntentID: charge.payment_intent },
//           data: { status: 'complete' }
//         })
//       }
//       break
//     default:
//       console.log('Unhandled event type:' + event.type)
//   }

//   res.json({ received: true })
// }
