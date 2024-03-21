import { Metadata } from 'next'
import Link from 'next/link'
import { UserAuthForm } from '@/components/user-auth-form'
import { ChevronLeft } from 'lucide-react'
import { LogoBrand } from '@/components/LogoBrand'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

export default function LoginPage() {
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-0 top-6 md:left-8 md:top-8'
        )}
      >
        <>
          <span className='flex h-8 items-center text-lg'>
            <ChevronLeft className='mr-2 h-8 w-8' />
            Back
          </span>
        </>
      </Link>
      <div className='mx-auto flex flex-col justify-center space-y-6 w-full md:-translate-y-20 border-x border-black/40 px-12'>
        <div className='flex flex-col items-center  justify-center gap-3 space-y-2 text-center'>
          <div className='rounded-full'>
            <LogoBrand className='mx-auto h-6 w-6 ' />
          </div>
          <h1 className='text-2xl font-manrope font-semibold tracking-tight'>Welcome back</h1>
          <p className='text-sm text-muted-foreground'>
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className='px-8 text-center text-sm text-muted-foreground'>
          <Link
            href='/register'
            className='underline underline-offset-4'
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
