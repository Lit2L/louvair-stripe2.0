import { CardSkeleton } from '@/components/shared/card-skeleton'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { Button } from '@/components/ui/button'

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading='Posts'
        text='Create and manage posts.'
      >
        <Button>Cart</Button>
      </DashboardHeader>
      <div className='divide-border-200 divide-y rounded-md border'>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
