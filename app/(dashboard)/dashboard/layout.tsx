import { dashboardConfig } from '@/config/dashboard'

import { MainNav } from '@/components/navigation/main-nav'
import { DashboardNav } from '@/components/navigation/nav'
import { getServerSession } from 'next-auth/next'
import { marketingConfig } from '@/config/marketing'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { SiteFooter } from '@/components/site-footer'
import { UserAccountNav } from '@/components/user-account-nav'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const getUser = await getServerSession(authOptions)
  const user = getUser?.user
  return (
    <div className='flex min-h-screen flex-col space-y-6'>
      <header className='sticky top-0 z-40 border-b bg-background'>
        <div className='container flex h-16 items-center justify-between py-4'>
          <MainNav
            user={{ id: user?.id as string, name: user?.name as string }}
            items={marketingConfig.mainNav}
          />
        </div>
        {/*  */}
      </header>
      <div className='container grid h-full flex-1 gap-12  md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr]'>
        <aside className='hidden w-[180px] duration-200 md:w-[200px] lg:w-[220px] xl:w-[260px] flex-col md:flex bg-neutral-600 font-thin text-neutral-600'>
          <DashboardNav items={dashboardConfig.sidebarNav} />
          <div className='border flex items-end justify-end h-full '>
            <div className='items-center justify-end w-full gap-3 flex'>
              <p className='text-lg font-semibold font-space text-white'>{user?.name}</p>

              <UserAccountNav
                user={{
                  name: user?.name,
                  image: user?.image,
                  email: user?.email
                }}
              />
            </div>
          </div>
        </aside>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
      </div>
      <SiteFooter className='border-t' />
    </div>
  )
}
