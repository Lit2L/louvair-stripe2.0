'use client'

import { UserButton } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import LoadingScreen from '@/components/loading-screen'
import Home from '@/app/(home)/home/page'

export default function IndexPage() {
	const [loadingVisible, setLoadingVisible] = useState<boolean>(true)

	useEffect(() => {
		const lenis = new Lenis()
		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])

	return (
		<div className='center column'>
			{loadingVisible ? <LoadingScreen setLoadingVisible={setLoadingVisible} /> : null}
			<Home />
			{/* <div className='absolute top-8 right-6 z-10'>
				<UserButton afterSignOutUrl='/' />
			</div> */}
		</div>
	)
}
