'use client'
// it seems that are some problems with my component export declarations ? gonna look at it some time
import { BadApple as BadAppleComponent } from '@datsfilipe/react-bad-apple/dist/esm/index'

export function BadApple () {
  return (
    <BadAppleComponent
      width={90}
      height={50}
      framesDir={'/frames'}
      loop
      customStyles={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    />
  )
}
