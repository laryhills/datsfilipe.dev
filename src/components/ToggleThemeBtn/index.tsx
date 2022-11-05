'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

export function ToggleThemeBtn () {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const themeInfo = localStorage.getItem('theme-info') as 'light' | 'dark'
    if (typeof localStorage !== 'undefined' && themeInfo) return themeInfo
    if (window.matchMedia('(prefers-colorscheme: dark)').matches) return 'dark'
    return 'light'
  })

  const variants = {
    light: {
      rotate: 0
    },
    dark: {
      rotate: 360
    }
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme-info', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme-info', 'light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  return (
    <div className='flex justify-between items-center p-1 rounded-xl w-fit bg-zinc-100'>
      <motion.button
        onClick={toggleTheme}
        aria-label='Toggle Theme'
        className='flex justify-center items-center p-2 mr-1 bg-amber-100 rounded-lg text-neutral-900 dark:bg-zinc-100'
        variants={variants}
        initial='light'
        animate={theme}
        transition={{ duration: 0.3 }}
      >
        <HiSun />
      </motion.button>
      <motion.button
        onClick={toggleTheme}
        aria-label='Toggle Theme'
        className='flex justify-center items-center p-2 rounded-lg bg-zinc-100 text-neutral-900 dark:bg-zinc-300'
        variants={variants}
        initial='light'
        animate={theme}
      >
        <HiMoon />
      </motion.button>
    </div>
  )
}
