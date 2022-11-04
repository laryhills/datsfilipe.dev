'use client'

import { BadApple as BadAppleComponent } from '@datsfilipe/react-bad-apple'

export function BadApple () {
  return (
    <BadAppleComponent
      width={90}
      height={50}
      framesDir={'/frames'}
      loop
    />
  )
}
