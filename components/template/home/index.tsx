import Hero from '@/components/template/hero'
import Footer from '@/components/Footer'
import TestimonialSliderComponent from '@/components/testimonials/testimonial-slider-component'
import Reel from '../reel'
import Play from '@/components/template/play'

export default function Home() {
  return (
    <div>
      <Hero />
      <Play />
      <Reel />
      <div className='w-full h-96 flex flex-col items-center  justify-center relative'>
        <TestimonialSliderComponent />
      </div>
      <Footer />
    </div>
  )
}
