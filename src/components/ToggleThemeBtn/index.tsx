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
    <div className='p-1 w-fit justify-between items-center flex rounded-xl bg-zinc-100'>
      <button
        onClick={toggleTheme}
        aria-label='Toggle Theme'
        className='p-2 flex items-center justify-center text-neutral-900 bg-amber-100 dark:bg-zinc-100 rounded-lg mr-1'
      >
        <HiSun />
      </button>
      <button
        onClick={toggleTheme}
        aria-label='Toggle Theme'
        className='p-2 flex items-center justify-center bg-zinc-100 text-neutral-900 dark:bg-zinc-300 rounded-lg'
      >
        <HiMoon />
      </button>
    </div>
  )
}
