import { BadApple } from '../BadApple'
import { UserInfo } from '../UserInfo'
import { FaMapMarkerAlt } from 'react-icons/fa'

export function MainComponent () {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen text-neutral-900 dark:text-neutral-50'>
      <div className='z-10 text-7xl font-bold font-mplus'>
        <UserInfo />
        <h1 className='mt-6 text-orange-500'>Filipe Lima,</h1>
        <h1>Web Developer,</h1>
        <h1>I&apos;m making what I love &lt;3</h1>
        <div className='flex text-stone-600 dark:text-stone-500'>
          <FaMapMarkerAlt />
          <h1 className='ml-2'>Brazil, Porto Franco - MA</h1>
        </div>
      </div>
      <div className='overflow-hidden absolute w-screen h-screen text-base transition-all select-none text-stone-300 dark:text-stone-700'>
        <BadApple />
      </div>
    </div>
  )
}
