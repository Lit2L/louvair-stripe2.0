import BurgerNav from '@/components/navigation/BurgerNav'
import { MainNav } from '@/components/navigation/main-nav'

import { marketingConfig } from '@/config/marketing'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='flex min-h-screen w-full flex-col '>
      <div className='fixed hidden top-0 md:flex h-20 items-center w-full justify-between py-4 z-40'>
        <MainNav items={marketingConfig.mainNav} />
      </div>
      <div className='fixed top-0 flex h-20 md:hidden  items-center w-full justify-between py-4 z-40'>
        <BurgerNav />
      </div>

      <main className=''>{children}</main>
    </div>
  )
}
