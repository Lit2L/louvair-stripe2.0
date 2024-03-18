import '../styles/globals.css'
import '../styles/shared.css'
import { Syncopate, Be_Vietnam_Pro as FontSans, Karla } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/utils/cn'
import { ClerkProvider } from '@clerk/nextjs'

const fontSans = FontSans({
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

const karla = Karla({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: '#000000' },
          elements: {
            formButtonPrimary:
              'bg-black border border-black border-solid hover:bg-white hover:text-black',
            socialButtonsBlockButton:
              'bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black',
            socialButtonsBlockButtonText: 'font-semibold',
            formButtonReset:
              'bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black',
            membersPageInviteButton:
              'bg-black border border-black border-solid hover:bg-white hover:text-black',
            card: 'bg-[#fafafa]'
          }
        }}
      >
        <head />
        <body
          className={cn('bg-background', syncopate.variable, fontSans.className, karla.className)}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
          >
            <main className=''>{children}</main>
            {/* <Analytics /> */}
            <Toaster
              position='top-right'
              theme='light'
              richColors
              closeButton
            />

            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}
