import '../styles/globals.css'
import '../styles/shared.css'
import { Montserrat, Syncopate } from 'next/font/google'
import Hydrate from '@/components/hydrate'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syncopate'
})

const montserrat = Montserrat({
  weight: ['200', '400', '600', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions)

  return (
    <html
      lang='en'
      className={`${syncopate.className} ${montserrat.className}`}
    >
      <Hydrate>
        <main className=''>{children}</main>
      </Hydrate>
    </html>
  )
}
