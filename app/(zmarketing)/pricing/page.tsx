import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import GlassCard from '@/components/GlassCard'

export const metadata = {
  title: 'Pricing'
}
export default function PricingPage() {
  return (
    <section className='w-screen h-screen flex flex-col items-center font-space mt-16'>
      <Card className='md:max-w-[64rem] flex flex-col container p-6'>
        <div className='flex w-full flex-col gap-4 md:max-w-[58rem] '>
          <h2 className='font-assistant font-semibold text-4xl tracking-wide'>
            Simple, Transparent Pricing
          </h2>
          <p className='max-w-[85%] leading-4 my-3 capitalize sm:text-md sm:leading-7'>
            The Louvair members plan.
          </p>
        </div>
        <div className='grid w-full items-start gap-10 rounded-lg border  p-6 md:grid-cols-[1fr_200px]'>
          <div className='grid gap-6'>
            <h3 className='text-xl font-semibold font-assistant sm:text-2xl'>What do you get?</h3>
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
        <div className='mx-auto flex w-full max-w-[58rem] mt-6 rounded flex-col justify-center items-center bg-neutral-700 gap-4'>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:leading-7 font-sans rounded-sm text-center text-white'>
            Louvair is in Test mode.
            <br />
            Early testers use the test numbers on the tests card below to order or to subscribe.
            <strong>You can test the upgrade and won&apos;t be charged.</strong>
          </p>
          <div className='w-full flex flex-col items-center justify-center rounded-xl'>
            <h3 className='text-xl text-destructive-foreground font-bold sm:text-2xl'>Test Card</h3>
            <GlassCard
              title='4242 4242 4242 4242'
              expiration='Exp: 4/24'
              cvv='CVV: 424'
            />
          </div>
        </div>
      </Card>
    </section>
  )
}
