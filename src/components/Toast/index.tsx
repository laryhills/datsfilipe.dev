'use client'
import { Toaster } from 'react-hot-toast'

export function Toast() {
  const getTheme = () => {
    const themeInfo = localStorage.getItem('theme-info') as 'light' | 'dark'
    if (typeof localStorage !== 'undefined' && themeInfo) return themeInfo
    if (window.matchMedia('(prefers-colorscheme: dark)').matches) return 'dark'
    return 'light'
  }

  return (
    <Toaster
      position='bottom-center'
      toastOptions={{
        duration: 5000,
        style: {
          background: getTheme() === 'dark' ? '#404040' : '#fafafa',
          color: getTheme() === 'dark' ? '#d6d3d1' : '#171717',
        }
      }}
    />
  )
}
