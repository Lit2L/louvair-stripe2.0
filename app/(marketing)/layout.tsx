import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'
import { marketingConfig } from '@/config/marketing'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <div className='fixed top-0 flex h-20 items-center w-full justify-between py-4 z-40'>
        <MainNav items={marketingConfig.mainNav} />
      </div>

      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  )
}
