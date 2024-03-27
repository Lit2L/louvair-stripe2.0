import { redirect } from 'next/navigation'
import { stripe } from '@/lib/stripe'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { BillingForm } from '@/components/billing-form'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getCurrentUser } from '@/lib/session'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'

import { CopyButton } from '@/components/copy-button'
import { FileWarning, FileWarningIcon } from 'lucide-react'

export const metadata = {
  title: 'Billing',
  description: 'Manage billing and your subscription plan.'
}

const testCards = [
  {
    brand: 'Visa',
    number: '4242 4242 4242 4242',
    cvc: '242',
    exp: '04/24',
    date: 'Any future date'
  }
]

export default async function BillingPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages?.signIn || '/login')
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id)

  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false
  if (subscriptionPlan.isPro && subscriptionPlan.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(subscriptionPlan.stripeSubscriptionId)
    isCanceled = stripePlan.cancel_at_period_end
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Billing'
        text='Manage billing and your subscription plan.'
      />
      <div className='grid gap-8 font-sans '>
        <Alert className='!pl-14'>
          <FileWarning />
          <AlertTitle>Louvair is in Test mode.</AlertTitle>
          <AlertDescription>
            L&apos;ouvair has partnered with Stripe to ensure the most secure and private payments.
            You can find a list of test card numbers on the{' '}
            <a
              href='https://stripe.com/docs/testing#cards'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-8'
            >
              Stripe docs
            </a>
          </AlertDescription>
        </Alert>
        <BillingForm
          subscriptionPlan={{
            ...subscriptionPlan,
            isCanceled
          }}
        />
      </div>
    </DashboardShell>
  )
}
