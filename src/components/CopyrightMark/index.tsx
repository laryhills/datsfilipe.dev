'use client'
import { usePathname } from 'next/navigation'

export function CopyrightMark() {
  const pathname = usePathname()

  return (
    <p className={`my-4 mx-auto ${pathname === '/' ? 'absolute bottom-4 self-center text-stone-500': ''}`}>
      © 2021 datsfilipe. All rights reserved.
    </p>
  )
}
