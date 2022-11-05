'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../Button'
import { FaHome, FaUser, FaCommentAlt, FaEnvelope } from 'react-icons/fa'

export function Navigation () {
  // the animation should trigger on scroll, if down, then hide the nav, if up, then show the nav
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset
    if (currentScrollPosition < 0) {
      setScrollDirection('up')
    } else if (currentScrollPosition > lastScrollPosition) {
      setScrollDirection('down')
    } else {
      setScrollDirection('up')
    }
    setLastScrollPosition(currentScrollPosition)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollPosition, scrollDirection])

  const variants = {
    up: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    down: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.div
      className='flex fixed bottom-4 z-10 justify-center items-center w-screen'
      variants={variants}
      initial='up'
      animate={scrollDirection}
    >
      <nav>
        <ul className='flex'>
          <li className='mx-5'>
            <Link href='/'>
              <Button>
                <FaHome className='mr-2 text-xl' />
                beginning
              </Button>
            </Link>
          </li>
          <li className='mx-5'>
            <Link href='/about'>
              <Button>
                <FaUser className='mr-2' />
                about
              </Button>
            </Link>
          </li>
          <li className='mx-5'>
            <Link href='/posts'>
              <Button>
                <FaCommentAlt className='mr-2' />
                posts
              </Button>
            </Link>
          </li>
          <li className='mx-5'>
            <Link href='/contact'>
              <Button>
                <FaEnvelope className='mr-2' />
                contact
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  )
}
