import { BadApple } from '@datsfilipe/react-bad-apple'
import { UserInfo } from '../UserInfo'
import { FaMapMarkerAlt } from 'react-icons/fa'

export function MainComponent () {
  return (
    <div className='w-screen h-screen text-neutral-900 dark:text-neutral-50 flex flex-col items-center justify-center'>
      <div className='text-7xl font-mplus font-bold z-10'>
        <UserInfo />
        <h1 className='text-orange-500 mt-6'>Filipe Lima,</h1>
        <h1>Web Developer,</h1>
        <h1>I&apos;m making what I love &lt;3</h1>
        <div className='text-stone-600 dark:text-stone-500 flex'>
          <FaMapMarkerAlt />
          <h1 className='ml-2'>Brazil, Porto Franco - MA</h1>
        </div>
      </div>
      <div className='text-stone-300 dark:text-stone-700 absolute w-screen h-screen overflow-hidden text-base transition-all select-none'>
        <BadApple
          width={90}
          height={50}
          framesDir={'/frames'}
        />
      </div>
    </div>
  )
}
