import * as React from 'react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/shared/icons'
import { ModeToggle } from '@/components/layout/mode-toggle'
import Link from 'next/link'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <Icons.logo />
          <p className='text-center text-sm leading-loose md:text-left'>
            Built by{' '}
            <Link
              href={siteConfig.links.facebook}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              li2l
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
            ></Link>
            <Link
              href={siteConfig.links.instagram}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  )
}
