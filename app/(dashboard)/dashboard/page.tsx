import { redirect } from 'next/navigation'
import { EmptyPlaceholder } from '@/components/shared/empty-placeholder'
import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { Button } from '@/components/ui/button'
import { auth, currentUser } from '@clerk/nextjs'

export const metadata = {
  title: 'Dashboard'
}

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) return <div className=''>Not signed in</div>

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Store'
        text='See the Louvair collection.'
      >
        <Button>{user?.firstName}</Button>
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
