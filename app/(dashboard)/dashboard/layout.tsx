import { dashboardConfig } from '@/config/dashboard'

import { MainNav } from '@/components/main-nav'
import { DashboardNav } from '@/components/nav'
import { SiteFooter } from '@/components/site-footer'

import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/session'
import { UserAccountNav } from '@/components/user-account-nav'
import BurgerNav from '@/components/BurgerNav'
import Footer from '@/components/Footer'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }
  // if (!user) {
  // 	return notFound()
  // }

  return (
    <div className='flex min-h-screen flex-col space-y-6 font-vietnam'>
      <header className='sticky top-0 z-40'>
        <div className='container flex h-16 items-center justify-between py-4'>
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email
            }}
          />
        </div>
      </header>
      <div className='container grid flex-1 gap-12 mt-16 md:grid-cols-[150px_1fr]'>
        <aside className='hidden w-[180px] flex-col md:flex bg-neutral-600 font-thin text-neutral-600'>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
      </div>
    </div>
  )
}
