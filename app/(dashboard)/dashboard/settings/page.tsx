import { redirect } from 'next/navigation'

import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { UserNameForm } from '@/components/forms/user-name-form'
import { checkSubscription } from '@/lib/subscription'
import { SubscriptionButton } from '@/components/subscription-button'

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.'
}

export default async function SettingsPage() {
  const isPro = await checkSubscription()

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Settings'
        text='Manage account and website settings.'
      />
      <div className='grid gap-10'>
        <div className='text-muted-foreground'>
          {isPro
            ? 'You are currently on the Pro plan.'
            : 'You are currently not subscribed to a plan.'}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </DashboardShell>
  )
}
