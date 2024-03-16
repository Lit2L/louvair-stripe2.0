import { ClerkProvider } from '@clerk/nextjs'

import '../../styles/globals.css'
import ThemeProvider from '@/components/theme-provider'
import Providers from '@/components/providers'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Syncopate, Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Toaster } from 'react-hot-toast'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

const syncopate = Syncopate({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-syncopate',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<head />
				<body className={cn('bg-background', syncopate.className, fontSans.variable)}>
					<ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
						<main>{children}</main>
						<Toaster />
						<TailwindIndicator />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
