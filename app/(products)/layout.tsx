import { MainNav } from '@/components/main-nav'
import { buttonVariants } from '@/components/ui/button'
import { marketingConfig } from '@/config/marketing'
import { cn } from '@/utils/cn'
import Link from 'next/link'

interface ProductsLayout {
  children: React.ReactNode
}

export default function ProductsLayout({ children }: ProductsLayout) {
  return (
    <div className='flex w-full flex-col '>
      <div className='flex h-20 items-center w-full justify-between py-4 z-40'>
        <MainNav items={marketingConfig.mainNav} />
        {/* <nav className='flex pt-3 mt-3 mx-3 items-center justify-center'>
          <Link
            href='/login'
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'px-4 ')}
          >
            Login
          </Link>
        </nav> */}
      </div>
      {children}
    </div>
  )
}
