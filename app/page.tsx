'use client'

import { useEffect, useState } from 'react'
import Home from '@/app/(home)/home/page'
import Lenis from '@studio-freight/lenis'
import LoadingScreen from '@/components/loading-screen'

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
    <>
      <div className='center column'>
        {loadingVisible ? <LoadingScreen setLoadingVisible={setLoadingVisible} /> : null}
        <Home />
      </div>
    </>
  )
}
