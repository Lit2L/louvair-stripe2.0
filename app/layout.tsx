import '../styles/globals.css'
import '../styles/shared.css'
import { Be_Vietnam_Pro, Syncopate } from 'next/font/google'
import Hydrate from '@/components/hydrate'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-syncopate'
})

const vietnam = Be_Vietnam_Pro({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-vietnam'
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions)

  return (
    <html
      lang='en'
      className={`${syncopate.className} ${vietnam.variable}`}
    >
      <Hydrate>
        <main className=''>{children}</main>
      </Hydrate>
    </html>
  )
}
