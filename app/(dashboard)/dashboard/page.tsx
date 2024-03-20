import { EmptyPlaceholder } from '@/components/empty-placeholder'
import { DashboardHeader } from '@/components/dashboard/header'

import { DashboardShell } from '@/components/shell'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Dashboard'
}

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading='Dashboard'
        text='Create and manage User account.'
      >
        <Button>kdfjd</Button>
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name='post' />
          <EmptyPlaceholder.Title>You have no orders...</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any orders yet. Subscribe to join.
          </EmptyPlaceholder.Description>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
