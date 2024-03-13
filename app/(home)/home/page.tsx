import Hero from '@/template/hero'
import Work from '@/template/work'
import Footer from '@/components/Footer'
import BurgerNav from '@/components/layout/BurgerNav'

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
