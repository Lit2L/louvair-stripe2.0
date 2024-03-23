import { MainNav } from '@/components/main-nav'
import { marketingConfig } from '@/config/marketing'

interface ProductsLayout {
  children: React.ReactNode
}

export default function ProductsLayout({ children }: ProductsLayout) {
  return (
    <div className='flex w-full flex-col '>
      <div className='flex h-20 items-center w-full justify-between py-4 z-40'>
        <MainNav items={marketingConfig.mainNav} />
      </div>
      {children}
    </div>
  )
}
