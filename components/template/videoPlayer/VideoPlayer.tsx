'use client'

import { useEffect, useRef } from 'react'
import './VideoPlayer.css'
import gsap from 'gsap'

type VideoPlayerProps = {
  handleClick: () => void
  handleScroll: () => void
}
const VideoPlayer = ({ handleClick, handleScroll }: VideoPlayerProps) => {
  const container = useRef(null)

  useEffect(() => {
    gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1 })
  }, [])

  const onClick = () => {
    handleClick()
  }

  const onWheel = () => {
    handleScroll()
  }

  return (
    <div ref={container} onClick={onClick} onWheel={onWheel} className='video-player'>
      <video autoPlay={true}>
        <source
          src='https://a.storyblok.com/f/133769/x/d0586c09b0/showreel-exoape.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default VideoPlayer
