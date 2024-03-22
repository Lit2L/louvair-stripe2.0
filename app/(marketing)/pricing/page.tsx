import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { Label } from '@/components/ui/label'

export const metadata = {
  title: 'Pricing'
}
export default function PricingPage() {
  return (
    <section className='container flex flex-col md:max-w-[64rem] mt-44 bg-slate-400/50 rounded-md border p-6 shadow-gray-600 shadow-2xl'>
      <div className='flex w-full flex-col gap-4 md:max-w-[58rem] '>
        <h2 className='font-heading text-3xl'>Simple, transparent pricing</h2>
        <p className='max-w-[85%] leading-4 my-3  sm:text-md sm:leading-7'>
          The Louvair members plan.
        </p>
      </div>
      <div className='grid w-full items-start gap-10 rounded-lg border bg-slate-400/60 p-6 md:grid-cols-[1fr_200px]'>
        <div className='grid gap-6'>
          <h3 className='text-xl font-bold sm:text-2xl'>What do you get?</h3>
          <ul className='grid gap-3 text-sm text-muted-foreground sm:grid-cols-2'>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Monthly refills
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Free shipping
            </li>

            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Air Diffuser Machine
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Free exchanges
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Discounts on all products
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Premium Support
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 space-y-3text-center'>
          <div className='gap-3 flex flex-col'>
            <h4 className='text-7xl font-bold'>$110</h4>
            <p className='text-sm font-medium text-muted-foreground'>Billed Monthly</p>
            <Label className='text-xs '>Save over $600 on membership</Label>
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
      <div className='mx-auto flex w-full max-w-[58rem] mt-6 rounded flex-col  justify-center items-center bg-neutral-700 gap-4'>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:leading-7 font-sans rounded-sm text-center text-white'>
          Louvair is in test mode. Please feel free to test by placing an order or by subscribing as
          a member.
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
        <div className='border flex flex-col font-sans font-semibold  space-y-3 w-1/3 p-3 bg-slate-500 my-12 '>
          <Label className='text-center text-gray-200 text-md '>Use Test Credit Card</Label>
          <Label className='text-gray-300 text-center text-2xl '>4242 4242 4242 4242</Label>
          <span className='flex w-full justify-evenly items-center'>
            <Label className='text-md text-gray-300'>exp: 4/24</Label>
            <Label className='text-md text-gray-300'>cvc: 424</Label>
          </span>
        </div>
      </div>
    </section>
  )
}
