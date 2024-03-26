import { LogoBrand } from '@/components/LogoBrand'
import BurgerNav from '@/components/navigation/BurgerNav'
import { MainNav } from '@/components/navigation/main-nav'
import { marketingConfig } from '@/config/marketing'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className='min-h-screen bg-[#f5f5f5] w-full relative'>{children}</div>
}
