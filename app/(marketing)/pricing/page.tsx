import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Pricing'
}
export default function PricingPage() {
  return (
    <section className='container flex flex-col md:max-w-[64rem] mt-44 bg-slate-500/30 rounded-md border p-6 shadow-gray-300 shadow-2xl'>
      <div className='mx-auto flex w-full flex-col gap-4 md:max-w-[58rem] '>
        <h2 className='font-sans '>Simple, transparent pricing</h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Unlock all features including unlimited posts for your blog.
        </p>
      </div>
      <div className='grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]'>
        <div className='grid gap-6'>
          <h3 className='text-xl font-bold sm:text-2xl'>What&apos;s included in the PRO plan</h3>
          <ul className='grid gap-3 text-sm text-muted-foreground sm:grid-cols-2'>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Unlimited Posts
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Unlimited Users
            </li>

            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Custom domain
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Dashboard Analytics
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Access to Discord
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Premium Support
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 text-center'>
          <div>
            <h4 className='text-7xl font-bold'>$110</h4>
            <p className='text-sm font-medium text-muted-foreground'>Billed Monthly</p>
          </div>

          <div className=''>
            <Link
              href='/dashboard/billing'
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className='mx-auto flex w-full max-w-[58rem] mt-6 rounded flex-col  justify-center items-center bg-neutral-600  border-2 gap-4'>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:leading-7 font-sans rounded-sm text-center text-white'>
          Louvair subscription is in beta mode. Please feel free to test by placing an order. demo
          app. <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>
  )
}
