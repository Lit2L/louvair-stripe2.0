'use client'

import { Session, getServerSession } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
// import Cart from './Cart';
// import { useCartStore } from '@/zustand/store';
import { FiShoppingCart } from 'react-icons/fi'
// import { AnimatePresence, motion } from 'framer-motion'
import { ThemeToggleButton } from './theme-toggle-button'
import { Logo } from './Logo'
import { UserAccountNav } from './user-account-nav'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default function Navbar({ user }: Session) {
  // const cartStore = useCartStore()
  const handleBlurOut = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  return (
    <nav className='md:flex items-center justify-between px-4 py-6 fixed w-full top-0 left-0 z-10 hidden '>
      <Link
        href={'/'}
        className='flex flex-col items-center justify-center'
      >
        <Logo className='h-12 w-12' />
        <span className='text-xs font-syncopate text-neutral-300 pt-1 text-center'>
          L&apos;ouvair
        </span>
      </Link>

      <ul className='flex items-center justify-center gap-8'>
        <li
          className='relative text-3xl cursor-pointer'
          // onClick={() => cartStore.toggleCart()}
        >
          <FiShoppingCart />
          {/* <AnimatePresence> */}
          {/* Required condition when a component is removed from React tree */}
          {/* {cartStore.cart.length > 0 && (
              <motion.span
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                exit={{ scale: 0 }}
                className='absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white rounded-full shadow-md bg-primary left-4 bottom-4'
              >
                {cartStore.cart.length}
              </motion.span>
            )} */}
          {/* </AnimatePresence> */}
        </li>
        {/* > If the user is not signed in: */}
        {!user && (
          <li className='px-2 py-1 text-sm text-white rounded-md bg-primary'>
            <button onClick={() => signIn()}>Sign in</button>
          </li>
        )}
        <ThemeToggleButton />
        {user && (
          <div className='cursor-pointer dropdown dropdown-end avatar'>
            <UserAccountNav user={user} />
            <ul
              tabIndex={0}
              className='w-48 p-4 space-y-4 text-sm shadow-lg dropdown-content menu bg-base-200 rounded-box'
            >
              <Link
                className='p-4 rounded-md hover:bg-base-100'
                href={'/dashboard'}
                onClick={handleBlurOut}
              >
                My Orders
              </Link>
              <li
                className='p-4 rounded-md hover:bg-base-100'
                onClick={() => {
                  handleBlurOut()
                  signOut()
                }}
              >
                Sign out
              </li>
            </ul>
          </div>
        )}
      </ul>
      {/* <AnimatePresence> */}
      {/* Required condition when a component is removed from React tree */}
      {/* {cartStore.isOpen && <Cart />} */}
      {/* </AnimatePresence> */}
    </nav>
  )
}
