'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Logo } from './Logo'
import { MainNavItem } from 'types'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { MobileNav } from './mobile-nav'
import { AiFillCloseCircle } from 'react-icons/ai'
import Cart from './Cart'
import { useCartStore } from '@/zustand/store'
import { signIn, signOut } from 'next-auth/react'
import { FiShoppingCart } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeToggleButton } from './theme-toggle-button'
import { Button } from './ui/button'
interface MainNavProps {
  children?: React.ReactNode
  items?: MainNavItem[]
  user?: { id: string; name: string }
}

export function MainNav({ children, items, user }: MainNavProps) {
  const cartStore = useCartStore()

  const handleBlurOut = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className='flex w-full items-center justify-between h-20 gap-6 mx-3 border-y mt-6 py-1 border-neutral-50/20'>
      <div className=''>
        <Link
          href='/'
          className='hidden items-center space-x-2 md:flex md:flex-col gap-1'
        >
          <Logo />
          <span className='hidden font-syncopate font-medium text-xs text-neutral-500  sm:inline-block'>
            {siteConfig.name}
          </span>
        </Link>
      </div>
      <div className='border-black/40 rounded-full px-4 py-2 border-2 shadow-2xl shadow-neutral-600'>
        {items?.length ? (
          <nav className='hidden gap-6 md:flex'>
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                passHref
                className={cn(
                  'flex items-center text-md font-medium font-sans transition-colors hover:text-foreground/80 sm:text-md tracking-wide',
                  item.href.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>

      <div className='flex items-center justify-start '>
        <Button
          className='font-syncopate px-6 relative text-sm tracking-wider cursor-pointer'
          onClick={() => signIn()}
        >
          Login
        </Button>
        {/* <button
          className='flex items-center space-x-2 md:hidden'
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <AiFillCloseCircle /> : <Logo />}
          <span className='font-bold'>Menu</span>
        </button>
        {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>} */}
      </div>
    </div>
  )
}
