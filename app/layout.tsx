import '../styles/globals.css'
import '../styles/shared.css'
import { Syncopate } from 'next/font/google'
import Hydrate from '@/components/hydrate'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syncopate'
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions)

  return (
    <html
      lang='en'
      className={`${syncopate.className}`}
    >
      <Hydrate>
        <main className='container mx-auto'>{children}</main>
      </Hydrate>
    </html>
  )
}
