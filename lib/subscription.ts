// @ts-nocheck
// TODO: Fix this when we turn strict mode on.
import { UserSubscriptionPlan } from '@/types'
import { auth } from '@clerk/nextjs'

import { freePlan, proPlan } from '@/config/subscriptions'
import { db } from '@/lib/db'

const DAY_IN_MS = 86_400_000

export const checkSubscription = async () => {
  const { userId } = auth()

  if (!userId) {
    return false
  }

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId: userId
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true
    }
  })

  if (!userSubscription) {
    return false
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

  return !!isValid
}
