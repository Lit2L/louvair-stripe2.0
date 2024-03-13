'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import './Hero.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef, useEffect, FC } from 'react'
import HeroImage from '../../public/home/hero.jpeg'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { ChevronLeft } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Hero: FC = () => {
  //Opening animation

  // Specify the type of elements for useRef
  const backgroundWrapper = useRef<HTMLDivElement>(null)
  const topSpans = useRef<HTMLSpanElement[]>([])
  const headings = useRef<HTMLParagraphElement[]>([])
  const backgroundImage = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (backgroundWrapper.current) {
        backgroundWrapper.current.style.transform = 'translateY(0)'
      }

      topSpans.current.forEach((span, i) => {
        gsap.fromTo(
          span,
          { rotation: 10, opacity: 0, y: () => span.clientHeight * 0.5 },
          {
            rotation: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.easeOut',
            delay: 0.6 + i / 20
          }
        )
      })

      headings.current.forEach((heading, i) => {
        gsap.fromTo(
          heading,
          { rotation: 10, opacity: 0, y: () => heading.clientHeight * 0.5 },
          {
            rotation: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.easeOut',
            delay: 0.8 + i / 10
          }
        )
      })
    }, 2300)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (backgroundImage.current) {
      gsap.to(backgroundImage.current, {
        y: () => window.innerHeight * 2,
        opacity: 0.3,
        scrollTrigger: {
          trigger: backgroundImage.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      })
    }
  }, [])

  //headings
  //     headings.forEach((heading, i) => {
  //       if (heading.current) {
  //         const currentHeading = heading.current
  //         gsap.fromTo(
  //           currentHeading,
  //           {
  //             rotation: 10,
  //             opacity: 0,
  //             y: () => currentHeading.clientHeight * 0.5
  //           },
  //           {
  //             rotation: 0,
  //             y: 0,
  //             opacity: 1,
  //             duration: 1,
  //             ease: 'power4.easeOut',
  //             delay: 0.8 + i / 10
  //           }
  //         )
  //       }
  //     })
  //   }, 2300)
  // }, [topSpans, headings])

  // // Scroll Parallax
  // useEffect(() => {
  //   if (backgroundImage.current) {
  //     gsap.to(backgroundImage.current, {
  //       y: () => window.innerHeight * 2,
  //       opacity: 0.3,
  //       scrollTrigger: {
  //         start: 'top',
  //         end: 'bottom',
  //         scrub: true
  //       }
  //     })
  //   }
  // }, [])

  return (
    <div id='hero-container' className=' smooth-transition'>
      <div className='hidden sm:block p-[5vw] '>
        <p className='text-xs font-semibold '>
          Lorem ipsum dolor sit amet consectetur
          <br /> possimus veniam asperiores pariatur
          <br />
        </p>
      </div>
      <div className='w-full'>
        <div className='hero-background loading-transition' ref={backgroundWrapper}>
          <Image fill src={HeroImage} alt=' hero' ref={backgroundImage} className='hero-image' />
        </div>

        <div className='content'>
          <h1 className=''>
            <div className='w-full text-center'>
              <p
                className='header text-[4rem] sm:text-[5rem]'
                ref={(el) => (headings.current[0] = el!)}
              >
                L&apos;ouvair
              </p>
            </div>

            <div className='w-full text-center '>
              <p className='sub-header text-6xl' ref={(el) => (headings.current[1] = el!)}>
                Air
              </p>
              <p className='sub-header' ref={(el) => (headings.current[2] = el!)}>
                Ambience
              </p>
            </div>
          </h1>
        </div>
        <div className='flex flex-col items-center w-full gap-10 h-full'>
          <Link
            href='/register'
            className={cn(
              'flex items-center w-72 justify-center',
              buttonVariants({ variant: 'secondary', size: 'sm' })
            )}
          >
            Get Started Today!
          </Link>

          <Link
            href='/login'
            className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'w-64')}
          >
            Visit Store
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
