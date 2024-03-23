'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Logo } from './Logo'
import { MainNavItem } from 'types'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import Cart from './Cart'
import { useCartStore } from '@/zustand/store'
import { signIn, signOut } from 'next-auth/react'
import { ShoppingBag } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeToggleButton } from './theme-toggle-button'
import { Button, buttonVariants } from './ui/button'
import Image from 'next/image'
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
        <ul className='flex items-center justify-center gap-8'>
          <li
            className='relative text-3xl cursor-pointer'
            onClick={() => cartStore.toggleCart()}
          >
            <ShoppingBag />
            <AnimatePresence>
              {/* Required condition when a component is removed from React tree */}
              {cartStore.cart.length > 0 && (
                <motion.span
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  exit={{ scale: 0 }}
                  className='absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white rounded-full shadow-md bg-primary left-4 bottom-4'
                >
                  {cartStore.cart.length}
                </motion.span>
              )}
            </AnimatePresence>
          </li>
          {/* > If the user is not signed in: */}

          <li>
            <ThemeToggleButton />
          </li>
          {!user ? (
            <Link
              href='/login'
              className={cn(
                'font-syncopate px-6 relative text-sm tracking-wider',
                buttonVariants({ variant: 'outline' })
              )}
            >
              Sign in
            </Link>
          ) : (
            <li>
              <Button
                className={cn(
                  'font-syncopate px-6 relative text-sm tracking-wider cursor-pointer',
                  buttonVariants({ variant: 'outline' })
                )}
                onClick={() => signOut()}
              >
                Logout
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
