'use client'

import { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

export function ToggleThemeBtn () {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const themeInfo = localStorage.getItem('theme-info') as 'light' | 'dark'
    if (typeof localStorage !== 'undefined' && themeInfo) return themeInfo
    if (window.matchMedia('(prefers-colorscheme: dark)').matches) return 'dark'
    return 'light'
  })

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
      <button
        onClick={toggleTheme}
        aria-label='Toggle Theme'
        className='flex justify-center items-center p-2 mr-1 bg-amber-100 rounded-lg text-neutral-900 dark:bg-zinc-100'
      >
        <HiSun />
      </button>
      <button
        onClick={toggleTheme}
        aria-label='Toggle Theme'
        className='flex justify-center items-center p-2 rounded-lg bg-zinc-100 text-neutral-900 dark:bg-zinc-300'
      >
        <HiMoon />
      </button>
    </div>
  )
}
