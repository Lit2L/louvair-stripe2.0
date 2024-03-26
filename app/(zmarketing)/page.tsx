'use client'

import { useEffect, useState } from 'react'
import Home from '@/components/template/home'
import Lenis from '@studio-freight/lenis'
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen'

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
