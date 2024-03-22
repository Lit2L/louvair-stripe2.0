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
import { FiShoppingCart } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeToggleButton } from './theme-toggle-button'
import { Button } from './ui/button'
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
            <FiShoppingCart />
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
          {!user && (
            <li className='px-2 py-1 text-sm text-white rounded-md bg-primary'>
              <button onClick={() => signIn()}>Sign in</button>
            </li>
          )}
        </ul>

        <ThemeToggleButton />
        {user && (
          <div className='cursor-pointer dropdown dropdown-end avatar'>
            {/* <Image
              src={user?.image as string}
              alt={user?.name as string}
              width={38}
              height={38}
              className="object-cover rounded-full shadow cursor-pointer bg-base-100"
              priority
              tabIndex={0}
            /> */}
            <ul
              tabIndex={0}
              className='w-48 p-4 space-y-4 text-sm shadow-lg  bg-base-200 rounded-box'
            >
              <li>
                <Link
                  className='p-4 rounded-md hover:bg-base-100'
                  href={'/dashboard'}
                  onClick={handleBlurOut}
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Button
                  className='font-syncopate px-6 relative text-sm tracking-wider cursor-pointer'
                  onClick={() => signIn()}
                >
                  Login
                </Button>
              </li>
            </ul>
          </div>
        )}

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
