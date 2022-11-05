import { BadApple } from '../BadApple'
import { UserInfo } from '../UserInfo'
import { FaMapMarkerAlt } from 'react-icons/fa'

export function MainComponent () {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <div className='z-10 text-7xl font-bold shadow-inner font-mplus'>
        <UserInfo />
        <h1 className='mt-6 text-orange-500 dark:text-orange-600'>Filipe Lima,</h1>
        <h1>Web Developer,</h1>
        <h1>I&apos;m making what I love &lt;3</h1>
        <div className='flex text-neutral-600 dark:text-neutral-500'>
          <FaMapMarkerAlt />
          <h1 className='ml-2'>Brazil, Porto Franco - MA</h1>
        </div>
      </div>
      <div className='overflow-hidden absolute w-screen h-screen text-base opacity-50 select-none text-stone-400 dark:text-stone-700'>
        <BadApple />
      </div>
    </div>
  )
}
