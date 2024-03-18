import { EmptyPlaceholder } from '@/components/shared/empty-placeholder'
import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { Button } from '@/components/ui/button'

import { Label } from '@/components/ui/label'
import { getCurrentUser } from '@/lib/session'

export const metadata = {
  title: 'Dashboard'
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) return <div className=''>Not signed in</div>

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Store'
        text='See the Louvair collection.'
      />

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
