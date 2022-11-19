'use client'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Dimensions = {
  x: number;
  w: number;
}

export function Navigation () {
  const pathname = usePathname()

  const [motionDivPosition, setMotionDivPosition] = useState<Dimensions>({
    w: 0,
    x: 0
  })

  const navigationButtons = {
    home: useRef<HTMLLIElement>(null),
    about: useRef<HTMLLIElement>(null),
    contact: useRef<HTMLLIElement>(null)
  }

  const initialPosition = () => {
    if (pathname === '/') {
      if (!navigationButtons.home.current) return {
        x: 0,
        width: 0
      }

      return {
        x: navigationButtons.home.current.offsetLeft,
        width: navigationButtons.home.current.offsetWidth
      }
    } else if (pathname === '/about') {
      if (!navigationButtons.about.current) return {
        x: 0,
        width: 0
      }

      return {
        x: navigationButtons.about.current.offsetLeft,
        width: navigationButtons.about.current.offsetWidth
      }
    } else if (pathname === '/contact') {
      if (!navigationButtons.contact.current) return {
        x: 0,
        width: 0
      }

      return {
        x: navigationButtons.contact.current.offsetLeft,
        width: navigationButtons.contact.current.offsetWidth
      }
    } 
  }

  const variants = {
    animate: {
      x: motionDivPosition?.x ? motionDivPosition.x - 10 : 0,
      width: motionDivPosition?.w ? motionDivPosition.w + 20 : 0
    },
    initial: {
      x: initialPosition()?.x || 0,
      width: initialPosition()?.width || 0
    }
  }

  useEffect(() => {
    setMotionDivPosition({
      x: initialPosition()?.x || 0,
      w: initialPosition()?.width || 0
    })
  }, [navigationButtons.home?.current, navigationButtons.about?.current, navigationButtons.contact?.current, pathname])

  return (
    <div className='flex absolute right-0 left-0 justify-center items-center mx-auto h-full font-medium w-fit'>
      <nav className='flex items-center h-full'>
        <ul
          className='flex relative'
          onMouseLeave={() => {
            setMotionDivPosition({
              x: initialPosition()?.x || 0,
              w: initialPosition()?.width || 0
            })
          }}
        >
          <motion.div
            className='absolute self-center h-8 rounded-md dark:bg-opacity-50 -z-10 dark:bg-zinc-600' 
            variants={variants}
            initial='initial'
            animate='animate'
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30
            }}
          />
          <li
            className='flex items-center mx-5 h-full'
            onMouseOver={() => {
              if (!navigationButtons.home.current) return
              setMotionDivPosition({ x: navigationButtons.home.current.offsetLeft, w: navigationButtons.home.current.offsetWidth })
            }}
            ref={navigationButtons.home}
          >
            <Link href='/'>
              Beginning
            </Link>
          </li>
          <li
            className='flex items-center mx-5 h-full'
            onMouseOver={() => {
              if (!navigationButtons.about.current) return
              setMotionDivPosition({ x: navigationButtons.about.current.offsetLeft, w: navigationButtons.about.current.offsetWidth })
            }}
            ref={navigationButtons.about}
          >
            <Link href='/about'>
              About
            </Link>
          </li>
          {/*<li className='mx-5'>
            <Link href='/posts'>
              posts
            </Link>
          </li>*/}
          <li
            className='flex items-center mx-5 h-full'
            onMouseOver={() => {
              if (!navigationButtons.contact.current) return
              setMotionDivPosition({ x: navigationButtons.contact.current.offsetLeft, w: navigationButtons.contact.current.offsetWidth })
            }}
            ref={navigationButtons.contact}
          >
            <Link href='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
