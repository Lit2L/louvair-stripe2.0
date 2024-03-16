import Hero from '@/components/template/hero'
import Work from '@/components/template/work'
import Footer from '@/components/Footer'
import BurgerNav from '@/components/BurgerNav'

export default function HomePage() {
  return (
    <div>
      <BurgerNav />
      <Hero />
      <Work />
      <Footer />
    </div>
  )
}
