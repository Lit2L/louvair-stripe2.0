import { dashboardConfig } from '@/config/dashboard'

import { MainNav } from '@/components/main-nav'
import { DashboardNav } from '@/components/nav'
import { SiteFooter } from '@/components/site-footer'

import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/session'
import { UserAccountNav } from '@/components/user-account-nav'
import BurgerNav from '@/components/BurgerNav'

import Link from 'next/link'
import { cn } from '@/utils/cn'
import { buttonVariants } from '@/components/ui/button'
import { marketingConfig } from '@/config/marketing'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = await getCurrentUser()

  // if (!user) {
  //   redirect('/login')
  // }

  return (
    <div className='flex min-h-screen flex-col space-y-4 font-vietnam relative'>
      <header className='fixed flex h-20 items-center w-full pr-6 justify-between py-4 z-40'>
        <MainNav items={marketingConfig.mainNav} />
        <span className=''>
          {user && (
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email
              }}
            />
          )}
        </span>
      </header>
      <div className='container grid flex-1 gap-12 pt-20 md:grid-cols-[150px_1fr]'>
        <aside className='hidden w-[180px] flex-col md:flex bg-neutral-600 font-thin text-neutral-600'>
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}
