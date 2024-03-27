import Hero from '@/components/template/hero'

import TestimonialSliderComponent from '@/components/testimonials/testimonial-slider-component'
import Reel from '../reel'
import Play from '@/components/template/play'

export default function Home() {
  return (
    <div className='max-w-screen'>
      <Hero />
      <Play />
      <Reel />
      <div className='max-w-screen overflow-hidden h-96 grid grid-cols-1   items-center w-min justify-center '>
        <TestimonialSliderComponent />
      </div>
    </div>
  )
}
