import BurgerNav from '@/components/BurgerNav'
import Navbar from '@/components/Navbar'
import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='h-screen w-full relative'>
      <header className='sticky top-0 z-40 border-b '>
        <div className='container flex items-center justify-between  relative'>
          {/* <MainNav /> */}
          {/* <Navbar /> */}
          <BurgerNav />
        </div>
      </header>
      <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>

      <SiteFooter className='border-t' />
    </div>
  )
}
