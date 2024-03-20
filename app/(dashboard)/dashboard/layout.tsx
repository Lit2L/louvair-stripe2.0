import { dashboardConfig } from '@/config/dashboard'

import { MainNav } from '@/components/main-nav'
import { DashboardNav } from '@/components/nav'
import { SiteFooter } from '@/components/site-footer'

import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/session'
import { UserAccountNav } from '@/components/user-account-nav'
import BurgerNav from '@/components/BurgerNav'
import Navbar from '@/components/Navbar'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className='sticky top-0  flex min-h-screen flex-col space-y-2 font-montserrat tracking-wide leading-1  border-b bg-background border-neutral-800 z-0'>
      <header className=''>
        <div className='container relative flex h-16 items-center justify-evenly w-full px-4'>
          <Navbar
            user={user}
            key={user?.id}
            expires={user.id}
          />
          <BurgerNav />
        </div>
      </header>
      <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
        <aside className='hidden w-[200px] flex-col md:flex mt-6'>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
      </div>
      <SiteFooter className='border-t' />
    </div>
  )
}
