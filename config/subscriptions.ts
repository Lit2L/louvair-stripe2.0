import { SubscriptionPlan } from 'types'

export const freePlan: SubscriptionPlan = {
  name: 'Free',
  description: 'The free plan is limited to 3 posts. Upgrade to the PRO plan to save money.',
  stripePriceId: ''
}

export const proPlan: SubscriptionPlan = {
  name: 'PRO',
  description:
    'The PRO plan has means you get one air diffuser and one monthly refill of a oil fragrance of your choice.',
  stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID as string
}
