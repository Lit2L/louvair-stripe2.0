import '../styles/globals.css'
import '../styles/shared.css'

import { ThemeProvider } from '@/components/theme-provider'
import { User } from 'next-auth'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Toaster } from '@/components/ui/toaster'
import { Be_Vietnam_Pro, Syncopate } from 'next/font/google'
import { cn } from '@/utils/cn'

interface RootLayoutProps {
  children: React.ReactNode
}

// export const metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`
//   },
//   description: siteConfig.description,
//   referrer: 'origin-when-cross-origin',
//   keywords: ['Fragrance', 'Business', 'Oils', 'Ecommerce', 'Subscription'],

//   authors: [
//     {
//       name: 'li2l'
//     }
//   ],
//   creator: 'li2l',
//   metadataBase: new URL(siteConfig.url),
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: siteConfig.name,
//     description: siteConfig.description,
//     images: [siteConfig.ogImage],
//     creator: '@li2l'
//   },
//   icons: {
//     icon: '/assets/Logo.png',
//     shortcut: '/favicon-16x16.png',
//     apple: '/apple-touch-icon.png'
//   },
//   manifest: `${siteConfig.url}/site.webmanifest`
// }

const syncopate = Syncopate({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-syncopate'
})

const vietnam = Be_Vietnam_Pro({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-vietnam'
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body className={cn('bg-background', syncopate.variable, vietnam.variable)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          <main className=''>{children}</main>
          {/* <Analytics /> */}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
