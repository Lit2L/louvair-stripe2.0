import * as React from 'react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { ThemeToggleButton } from '@/components/theme-toggle-button'
import Link from 'next/link'
import { Logo } from './Logo'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <Logo />
          <span className='text-center text-sm leading-loose md:text-left'>
            Built by{' '}
            <Link
              href={siteConfig.links.facebook}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              facebook
            </Link>
            . Hosted on{' '}
            <Link
              href='https://vercel.com'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Vercel
            </Link>
            . Illustrations by{' '}
            <Link
              href='https://popsy.co'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Popsy
            </Link>
            . The source code is available on{' '}
            <Link
              href={siteConfig.links.instagram}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Instagram
            </Link>
            .
          </span>
        </div>
        <ThemeToggleButton />
      </div>
    </footer>
  )
}
