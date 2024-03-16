import '../styles/globals.css'
import '../styles/shared.css'
import { Syncopate, Be_Vietnam_Pro as FontSans, Be_Vietnam_Pro } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/utils/cn'
import { ClerkProvider } from '@clerk/nextjs'

const fontSans = Be_Vietnam_Pro({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-sans'
})

const syncopate = Syncopate({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-syncopate'
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <head />
        <body className={cn('bg-background', syncopate.variable, fontSans.className)}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
          >
            <main className=''>{children}</main>
            {/* <Analytics /> */}
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
