import { Inter as FontSans, M_PLUS_Rounded_1c as FontMplus, Merriweather as FontSerif } from '@next/font/google'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Toast } from '../components/Toast'

import { CopyrightMark } from '../components/CopyrightMark'
import { Header } from '../components/Header'

import './globals.css'
import type { ReactElement } from 'react'

interface RootLayoutProps {
  children: ReactElement;
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter'
})

const fontMplus = FontMplus({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-mplus'
})

const fontSerif = FontSerif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather'
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body>
        <div className={twMerge(clsx(
          'flex flex-col w-full min-h-screen selection:bg-orange-500 selection:bg-opacity-30 h-fit scroll-smooth bg-neutral-50 text-neutral-900 dark:text-neutral-50 dark:bg-neutral-900',
          fontSans.variable,
          fontMplus.variable,
          fontSerif.variable
        ))}>
          <Header />
          {children}
          <CopyrightMark />
        </div>
        <Toast />
      </body>
    </html>
  )
}
