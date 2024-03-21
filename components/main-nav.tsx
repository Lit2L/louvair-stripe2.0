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
import { MainNavItem } from '@/types'
import { MobileNav } from './mobile-nav'
import { LogoBrand } from './LogoBrand'
import { FcCloseUpMode } from 'react-icons/fc'

interface MainNavProps {
  children?: React.ReactNode
  items?: MainNavItem[]
}

export function MainNav({ children, items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className='flex w-full items-center justify-between gap-6 md:gap-10 mx-3 border-y mt-6 py-1 border-neutral-50/20'>
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
      <div className=''>
        {items?.length ? (
          <nav className='hidden gap-6 md:flex w-full'>
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? '#' : item.href}
                className={cn(
                  'flex items-center text-md font-vietnam transition-colors hover:text-foreground/80 sm:text-md tracking-wide',
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
      <div className='flex w-full md:w-0 items-center justify-center '>
        <button
          className='flex items-center space-x-2 md:hidden'
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <MdClose /> : <Logo />}
          <span className='font-bold'>Menu</span>
        </button>
        {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
      </div>
    </div>
  )
}
