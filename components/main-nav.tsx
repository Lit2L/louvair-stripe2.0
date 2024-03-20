'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Logo } from './Logo'
import { MdClose } from 'react-icons/md'
import BurgerNav from './BurgerNav'
import { UserAccountNav } from './user-account-nav'

interface MainNavProps {
  children?: React.ReactNode
}

export function MainNav({ children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className='flex font-syncopate w-full left-0 md:gap-10 bg-transparent fixed top-3 justify-between px-6'>
      <Link
        href='/'
        className='hidden items-center space-x-2 md:flex'
      >
        <div className='h-20 w-20 flex flex-col items-center text-center justify-center gap-1'>
          <Logo />

          <span className='hidden font-light text-xs text-neutral-500  sm:inline-block'>
            {siteConfig.name}
          </span>
        </div>
      </Link>

      <nav className='hidden gap-6 md:flex'>
        <Link
          href='/'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm'
        >
          Products
        </Link>
        <Link
          href='/'
          className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm'
        >
          Pricing
        </Link>
      </nav>
      {/*
      <button
        className='flex items-center space-x-2 md:hidden'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <MdClose /> : <Logo />}
        <span className='font-bold'>Menu</span>
      </button>
      {showMobileMenu && <BurgerNav />} */}
    </div>
  )
}
