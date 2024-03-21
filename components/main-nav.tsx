'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Logo } from './Logo'
import { MainNavItem } from 'types'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { MdClose } from 'react-icons/md'

import { MobileNav } from './mobile-nav'
import { AiFillCloseCircle } from 'react-icons/ai'

interface MainNavProps {
  children?: React.ReactNode
  items?: MainNavItem[]
}

export function MainNav({ children, items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className='flex w-full items-center justify-between gap-6 md:gap-10 mx-3 border-y mt-6 py-1 border-neutral-50/20'>
      <Link
        href='/'
        className='hidden items-center space-x-2 md:flex md:flex-col gap-1'
      >
        <Logo />
        <span className='hidden font-syncopate font-medium text-xs text-neutral-500  sm:inline-block'>
          {siteConfig.name}
        </span>
      </Link>

      {items?.length ? (
        <nav className='hidden gap-6 md:flex'>
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              passHref
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

      <span className='flex w-full md:w-0 items-center justify-start '>
        <button
          className='flex items-center space-x-2 md:hidden'
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <AiFillCloseCircle /> : <Logo />}
          <span className='font-bold'>Menu</span>
        </button>
        {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
      </span>
    </div>
  )
}
