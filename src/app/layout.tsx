import { Inter, M_PLUS_Rounded_1c, Merriweather } from '@next/font/google'

import { CopyrightMark } from '../components/CopyrightMark'
import { Header } from '../components/Header'

import './globals.css'
import type { ReactElement } from 'react'

interface RootLayoutProps {
  children: ReactElement;
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font'
})

const mplus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--mplus-font'
})

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--merriweather-font',
  weight: ['400', '700']
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>datsfilipe website</title>
      </head>
      <body>
        <div className={`${inter.variable} ${mplus.variable} ${merriweather.variable} flex flex-col w-full min-h-screen selection:bg-orange-500 selection:bg-opacity-30 h-fit scroll-smooth bg-neutral-50 text-neutral-900 dark:text-neutral-50 dark:bg-neutral-900`}>
          <Header />
          {children}
          <CopyrightMark />
        </div>
      </body>
    </html>
  )
}
