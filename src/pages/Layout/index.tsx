import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Navigation } from '../../components/Navigation'
import { Outlet } from 'react-router-dom'

export default function Layout () {
  const [hideNavigation, setHideNavigation] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHideNavigation(true)
      } else {
        setHideNavigation(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <>
      <Header />
      <div className={`${hideNavigation && 'invisible'} visible transition-all`}>
        <Navigation />
      </div>
      <Outlet />
    </>
  )
}
