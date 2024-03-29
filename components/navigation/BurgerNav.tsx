'use client'

import React from 'react'
import Link from 'next/link'
import { TbBrandFacebookFilled } from 'react-icons/tb'
import { AiOutlineClose, AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai'
import { ThemeToggle } from '../theme-toggle'
import { motion } from 'framer-motion'
import { LogoBrand } from '../LogoBrand'
import { Logo } from '../Logo'
import { AlignLeft, CircleX, SquareChevronRight, SquareX } from 'lucide-react'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = { className: 'red-hover nav-link' }

const BurgerNav = () => {
  const [nav, setNav] = React.useState(false)
  const [desktopMenu, setDesktopMenu] = React.useState(false)

  React.useEffect(() => {
    const handleNav2 = () => {
      if (window.scrollY >= 90) {
        setDesktopMenu(true)
      } else {
        setDesktopMenu(false)
      }
    }
    window.addEventListener('scroll', handleNav2)
  }, [])

  const handleNav = () => {
    setNav((prev) => !prev)
  }

  return (
    <div className='fixed top-0 left-0 w-full h-[100px] z-[200] flex items-center justify-between px-6'>
      <div className='z-20 md:hidden flex flex-col cursor-pointer top-6 left-6 shadow-2xl rounded-full border-[#69696941] sm:border-none'>
        <Link href='/'>
          <LogoBrand />

          <h3 className='text-[10px] tracking-widest text-center mt-1 w-full uppercase sm:text-neutral-300 font-syncopate'>
            L&apos;ouvair
          </h3>
        </Link>
      </div>
      <div
        onClick={handleNav}
        className='flex gap-3 text-black red-hover w-32'
      >
        <span className='font-syncopate'>MENU</span>
        <AlignLeft
          size={25}
          className=''
        />
      </div>
      <div
        className={`${
          nav
            ? 'right-0 rounded-none opacity-100'
            : 'right-[-100%] md:right-[-60%] rounded-l-[500px] opacity-0'
        } fixed z-[2] top-0 w-[100%] h-screen flex flex-col justify-evenly bg-black/95 text-neutral-200 md:w-[60%] lg:w-[50%] px-7 sm:px-[40px] md:px-[80px] lg:px-[100px] py-10 ease-in-out duration-1000 border-y-2 border-r-2 rounded-lg`}
      >
        <div
          id='top'
          className='h-1/3 flex flex-col justify-center items-center bg-neutral-900 w-full rounded'
        >
          <div
            className={`${
              nav ? 'opacity-100  p-1' : 'opacity-0'
            } hidden sm:flex sm:flex-col w-full sm:items-end sm:justify-end cursor-pointer duration-1000 ease-in-out tracking-widest flex-col`}
          >
            <h2 className='whitespace-nowrap ml-0 w-full font-bold  text-5xl text-center'>
              <span className='text-white'>L&apos;</span>ouvair
            </h2>
          </div>
          <div
            className={`${
              nav ? 'flex w-full mt-12 opacity-100' : 'translate-x-[200px] opacity-0'
            } lg:hidden w-[95px] lg:w-[105px] h-[40px] overflow-visible flex items-center cursor-pointer duration-1000 ease-in-out `}
          >
            <h2 className='whitespace-nowrap ml-0 h-full w-full font-bold red-hover text-5xl text-center'>
              <span className='text-white'>L&apos;</span>ouvair
            </h2>
          </div>

          <div
            onClick={handleNav}
            className='absolute top-[20px] md:top-[40px] left-[20px] md:right-[40px] rounded-sm p-1 cursor-pointer theme-gradient text-white hover:opacity-70 duration-300'
          >
            <SquareChevronRight size={32} />
          </div>

          <div
            className={`${
              nav ? 'translate-x-0 opacity-100' : 'translate-x-[200px] opacity-0'
            } border-b border-[#72655f] duration-1000 ease-in-out delay-&lsqb;.5s&rsqb`}
          >
            <p className='text-md text-center text-[#ba7339] my-6'>Aromatic Bliss</p>
          </div>
        </div>
        <div className='flex w-full justify-center items-center h-20 '>
          <ThemeToggle />
        </div>
        <div
          id='middle'
          className='h-1/4 mb-24'
        >
          <ul className='flex flex-col gap-4 text-neutral-50 font-assistant text-center tracking-widest'>
            <Link href='/'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav ? 'translate-x-0 opacity-100 red-hover' : 'translate-x-[600px] opacity-0'
                } text-3xl tracking-wider font-medium hover:cursor-pointer duration-1000 ease-in-out delay-&lsqb;.8s&rsqb`}
              >
                Home
              </li>
            </Link>
            <Link href='/products'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav ? 'translate-x-0 opacity-100 red-hover' : 'translate-x-[600px] opacity-0'
                } text-3xl tracking-wider font-medium hover:cursor-pointer duration-1000 ease-in-out delay-&lsqb;.9s&rsqb`}
              >
                Products
              </li>
            </Link>

            <Link href='/pricing'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav
                    ? 'translate-x-0 opacity-100 red-hover tracking-wider red-hover'
                    : 'translate-x-[600px] opacity-0'
                } text-3xl duration-1000 `}
              >
                Pricing
              </li>
            </Link>

            <Link href='/about'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav ? 'translate-x-0 opacity-100 red-hover' : 'translate-x-[600px] opacity-0'
                } text-3xl tracking-wider font-thin hover:cursor-pointer duration-1000 ease-in-out`}
              >
                About
              </li>
            </Link>

            <Link href='/contact'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav ? 'translate-x-0 opacity-100 red-hover' : 'translate-x-[600px] opacity-0'
                } text-3xl tracking-wider font-medium hover:cursor-pointer duration-1000 ease-in-out`}
              >
                Contact
              </li>
            </Link>
            <div className='py-20 border-b h-16 w-full border-[#ba7339] text-center'>
              <Link href='/login'>
                <li
                  onClick={() => setNav(false)}
                  className={`${
                    nav ? 'translate-x-0 opacity-100 red-hover' : 'translate-x-[600px] opacity-0'
                  } text-3xl tracking-widest text-[#d4803b] font-semibold hover:cursor-pointer hover:text-sky-800 duration-1000 ease-in-out `}
                >
                  Login
                </li>
              </Link>
            </div>
          </ul>
        </div>

        <div
          id='bottom'
          className='h-1/3 flex flex-col justify-center items-center w-full text-center'
        >
          <p
            className={`${
              nav ? 'translate-x-0 opacity-100' : 'translate-x-[600px] opacity-0'
            } text-md text-neutral-500 py-4 duration-1000 ease-in-out delay-&lsqb;1.6s&rsqb`}
          >
            Let&apos;s connect
          </p>
          <div
            className={`${
              nav ? 'translate-x-0 opacity-100' : 'translate-x-[600px] opacity-0'
            } flex items-center gap-10 text-xl duration-1000 ease-in-out delay-&lsqb;1.7s&rsqb`}
          >
            <div className='h-12 w-12  flex items-center justify-center'>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full hover:py-3 py-1 cursor-pointer hover:scale-110 hover:bg-neutral-500 hover:text-neutral-900 duration-300 facebook-gradient'>
                  <TbBrandFacebookFilled />
                </div>
              </a>
            </div>
            <div className='h-12 w-12 flex items-center justify-center'>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full hover:py-3 cursor-pointer hover:scale-110 hover:bg-neutral-500 duration-300 instagram-gradient'>
                  <AiOutlineInstagram size={28} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BurgerNav
