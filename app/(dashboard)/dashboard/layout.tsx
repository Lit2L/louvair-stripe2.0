import { dashboardConfig } from '@/config/dashboard'

import { MainNav } from '@/components/navigation/main-nav'
import { DashboardNav } from '@/components/navigation/nav'
import { getServerSession } from 'next-auth/next'
import { marketingConfig } from '@/config/marketing'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Footer from '@/components/Footer'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = await getServerSession(authOptions)

  // if (!user) {
  //   redirect('/login')
  // }

  return (
    <div className='flex flex-col h-screen space-y-4 font-sans relative'>
      <header className='fixed flex h-20 items-center w-full pr-6 justify-between py-4 z-40'>
        <MainNav
          user={{ id: session?.user.id as string, name: session?.user.name as string }}
          items={marketingConfig.mainNav}
        />
      </header>
      <div className='container grid flex-1 gap-12 pt-20 md:grid-cols-[150px_1fr]'>
        <aside className='hidden w-[180px] flex-col md:flex bg-neutral-600 font-thin text-neutral-600'>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
