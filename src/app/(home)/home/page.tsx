import Hero from '@/components/home/hero'
import Work from '@/components/home/work'
import Footer from '@/components/home/Footer'
import BurgerNav from '@/components/BurgerNav'

export default function HomePage() {
	return (
		<div className='center column'>
			<BurgerNav />
			<Hero />
			<Work />
			<Footer />
		</div>
	)
}
