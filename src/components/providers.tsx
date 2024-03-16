'use client'

import React from 'react'

import ThemeProvider from '@/components/theme-provider'
import ToasterProvider from '@/components/toaster-provider'

interface ProvidersProps {
	children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider attribute='class' defaultTheme='light' enableSystem>
			<ToasterProvider />

			{children}
		</ThemeProvider>
	)
}

export default Providers
