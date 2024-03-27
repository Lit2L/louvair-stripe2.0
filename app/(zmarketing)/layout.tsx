import { SiteFooter } from '@/components/site-footer'
import BurgerNav from '@/components/navigation/BurgerNav'
import { MainNav } from '@/components/navigation/main-nav'

import { marketingConfig } from '@/config/marketing'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { buttonVariants } from '@/components/ui/button'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='container z-40 bg-background'>
        <div className='flex h-20 items-center justify-between py-6'>
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href='/login'
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-4')}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  )
}
