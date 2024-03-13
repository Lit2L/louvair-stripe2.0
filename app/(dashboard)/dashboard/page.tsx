import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'
import { EmptyPlaceholder } from '@/components/shared/empty-placeholder'
import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { Button } from '@/components/ui/button'
import { authOptions } from '@/lib/auth'

export const metadata = {
  title: 'Dashboard'
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    <DashboardShell>
      <DashboardHeader heading='Store' text='See the Louvair collection.'>
        <Button>Fake button</Button>
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name='post' />
          <EmptyPlaceholder.Title>No products found</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any content yet. Start creating content.
          </EmptyPlaceholder.Description>
          <Button variant='outline'>button</Button>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
