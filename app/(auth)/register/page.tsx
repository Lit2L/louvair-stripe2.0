import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'
import { UserAuthForm } from '@/components/user-auth-form'
import { Suspense } from 'react'
import { Logo } from '@/components/icons/Logo'
import { ChevronRight } from 'lucide-react'

export const metadata = {
  title: 'Create an account',
  description: 'Create an account to get started.'
}

export default function RegisterPage() {
  return (
    <div className='container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='hidden h-full bg-muted lg:block' />
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <Logo className='mx-auto size-16 shadow-lg rounded-full mb-12' />
            <h1 className='text-2xl font-semibold tracking-tight'>Create an account</h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email below to create your account
            </p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <UserAuthForm />
          </Suspense>

          <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking continue, you agree to our{' '}
            <Link
              href='/terms'
              className='hover:text-brand underline underline-offset-4'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy'
              className='hover:text-brand underline underline-offset-4'
            >
              Privacy Policy
            </Link>
            .
          </p>
          <Button
            className={cn(
              buttonVariants({ variant: 'default', size: 'sm' }),
              'w-full bg-neutral-800 font-sans text-neutral-300'
            )}
          >
            <a href='/login'>
              <span className='text-center justify-center font-thin tracking-wide h-full w-full flex items-center hover:underline '>
                Continue to Login
                <ChevronRight
                  className='ml-2'
                  size={30}
                />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
