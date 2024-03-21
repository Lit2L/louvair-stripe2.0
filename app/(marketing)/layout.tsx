import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'
import { buttonVariants } from '@/components/ui/button'
import { marketingConfig } from '@/config/marketing'
import { cn } from '@/utils/cn'
import Link from 'next/link'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <div className='fixed flex h-20 items-center w-full py-6'>
        <MainNav items={marketingConfig.mainNav} />
        <nav className='flex pt-3 mt-3 mx-3 items-center justify-center h-20 '>
          <Link
            href='/login'
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'px-4 ')}
          >
            Login
          </Link>
        </nav>
      </div>

      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  )
}
