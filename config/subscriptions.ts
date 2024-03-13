import { SubscriptionPlan } from 'types'
import { env } from '@/env.mjs'

export const freePlan: SubscriptionPlan = {
  name: 'Free',
  description: 'The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.',
  stripePriceId: ''
}

export const proPlan: SubscriptionPlan = {
  name: 'PRO',
  description:
    'The PRO plan has means you get one air diffuser and one monthly refill of a oil fragrance of your choice.',
  stripePriceId: env.STRIPE_PRO_MONTHLY_PLAN_ID || ''
}

// import { SubscriptionPlan } from 'types'

// export const freePlan: SubscriptionPlan = {
//   name: 'Free',
//   description: 'The free plan means you pay full price. Upgrade to the PRO plan love your life.',
//   stripePriceId: '',
//   benefits: [
//     '1 premium air dispenser included',
//     'No refillable fragrant oils automatically shipped per month',
//     'Free priority shipping',
//     '0% off additional purchases',
//     'Early access to new scents',
//     'Exclusive member support'
//   ],
//   prices: {
//     monthly: 0,
//     yearly: 0
//   }
// }

// export const proPlan: SubscriptionPlan = {
//   name: 'PRO',
//   description:
//     'The PRO plan includes commercial high quality air diffuser machine as well as a monthly refill.',
//   stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || '',
//   benefits: [
//     '1 air dispenser included',
//     'refill fragrant oils per month',
//     'Free automatic shipping',
//     '10% off additional purchases'
//   ],
//   prices: {
//     monthly: 110,
//     yearly: 1300
//   }
// }
