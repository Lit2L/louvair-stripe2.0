import Link from 'next/link'
import Louvair from '../public/assets/LogoWhite.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='px-6 bg-zinc-900 w-full font-sans'>
      <div className='grid grid-cols-1 gap-8 py-6 text-white transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-zinc-900'>
        <div className='col-span-1 lg:col-span-2'>
          <Link
            href='/'
            className='flex items-center flex-initial font-bold md:mr-24'
          >
            <span className='mr-2 border rounded-full border-zinc-700'>
              <Image
                src={Louvair}
                alt='Louvair Logo'
                width={40}
                height={40}
              />
            </span>
            <h3 className='text-[10px] tracking-widest text-center mt-1 w-full uppercase sm:text-neutral-300 font-syncopate'>
              L&apos;ouvair
            </h3>
          </Link>
        </div>
        <div className='col-span-1 lg:col-span-2'>
          <ul className='flex flex-col flex-initial md:flex-1'>
            <li className='py-3 md:py-0 md:pb-4'>
              <Link
                href='/'
                className='text-white transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Home
              </Link>
            </li>
            <li className='py-3 md:py-0 md:pb-4'>
              <Link
                href='/'
                className='text-white transition duration-150 ease-in-out hover:text-zinc-200'
              >
                About
              </Link>
            </li>
            <li className='py-3 md:py-0 md:pb-4'>
              <Link
                href='/'
                className='text-white transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Careers
              </Link>
            </li>
            <li className='py-3 md:py-0 md:pb-4'>
              <Link
                href='/'
                className='text-white transition duration-150 ease-in-out hover:text-zinc-200'
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-span-1 lg:col-span-2'>
          <ul className='flex flex-col flex-initial md:flex-1'>
            <li className='py-3 md:py-0 md:pb-4'>
              <span className='font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200'>
                LEGAL
              </span>
            </li>
            <li className='py-3 md:py-0 md:pb-4'>
              <span className='text-white transition duration-150 ease-in-out hover:text-zinc-200'>
                Privacy Policy
              </span>
            </li>
            <li className='py-3 md:py-0 md:pb-4'>
              <span className='text-white transition duration-150 ease-in-out hover:text-zinc-200'>
                Terms of Use
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between py-12 space-y-4 md:flex-row bg-zinc-900'>
        <div>
          <span className='text-xs'>
            &copy; {new Date().getFullYear()} Louvair, Inc. All rights reserved.
          </span>
        </div>
        <div className='flex items-center'>
          <span className='text-white text-xs px-3'>Crafted by</span>
          <a
            href='https://vercel.com'
            aria-label='Logo Link'
          >
            <Image
              src={Louvair}
              height={20}
              width={20}
              alt='Vercel.com Logo'
              className='shadow-xl '
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
