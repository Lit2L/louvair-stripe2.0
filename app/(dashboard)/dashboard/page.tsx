import { DashboardHeader } from '@/components/dashboard/header'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import priceFormat from '@/lib/priceFormat'
import { DashboardShell } from '@/components/shell'
import { db } from '@/lib/db'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export const metadata = {
  title: 'Dashboard'
}

export const revalidate = 0

async function fetchOrders() {
  const user = await getServerSession(authOptions)

  if (!user) return null

  const orders = await db.order.findMany({
    where: { userId: (user?.user as any).id },
    include: { products: true }
  })
  return orders
}

export default async function DashboardPage() {
  const orders = await fetchOrders()
  console.log(orders)
  let today = (date: string | number | Date) => {
    const day = new Date(date).getDate()
    const month = new Date(date).getMonth()
    const year = new Date(date).getFullYear()
    const time = new Date(date).toLocaleTimeString()
    return `${day}/${month}/${year} - ${time}`
  }
  console.log('<Dashboard> :', orders)
  if (orders === null) {
    return (
      <>
        <Separator />
        <div className='mt-6'>
          <h1 className='font-sans text-2xl font-bold'>
            Dashboard <span className='font-normal'>| User not logged in</span>
          </h1>
          <h2 className='mt-3 text-base'>Login to view your orders.</h2>
        </div>
      </>
    )
  }
  if (orders.length === 0) {
    return (
      <>
        <Separator />
        <div className='font-sans mt-6'>
          <h1 className='text-3xl font-bold'>
            Dashboard <span className='font-medium'>| user</span>
          </h1>
          <h2 className='mt-1 text-base'>You have no orders...</h2>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='font-assistant'>
        <DashboardShell>
          <DashboardHeader
            heading='Dashboard'
            text='Store and manage User account.'
          >
            Purchase History
          </DashboardHeader>
          <Separator />
          <div className='flex flex-col gap-4'>
            {orders?.map((order) => (
              <div
                key={order.id}
                className='relative flex flex-col gap-1 p-3 rounded-lg shadow-sm bg-secondary'
              >
                <h2>Order: {order.id}</h2>

                <p className='text-[12px]'>{today(order.createdDate)}</p>
                <p className='absolute text-[13px] top-4 right-3'>
                  Payment:{' '}
                  <span
                    className={`${
                      order.status === 'complete' ? 'bg-green-500' : 'bg-blue-800'
                    } p-1 text-white rounded-md px-2 mx-2 uppercase font-semibold tracking-wide`}
                  >
                    {order.status}
                  </span>
                </p>
                {/* Products in Order */}
                <div className='flex flex-col gap-2 py-2'>
                  {order.products.map((product) => (
                    <div
                      key={product.id}
                      className='flex items-center gap-4 py-1'
                    >
                      <Image
                        className='object-cover bg-primary rounded-full w-12 h-12'
                        src={product.image!}
                        alt={product.name}
                        width={44}
                        height={44}
                        priority
                      />
                      <div className='flex flex-col'>
                        <h4 className='text-md text-card-foreground font-semibold'>
                          {product.name}
                        </h4>
                        <p className='text-sm'>
                          {product.quantity} x {priceFormat(product.unit_amount)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className='text-sm font-semibold'>Total: {priceFormat(order.amount)}</p>
              </div>
            ))}
          </div>
        </DashboardShell>
      </div>
    </>
  )
}
