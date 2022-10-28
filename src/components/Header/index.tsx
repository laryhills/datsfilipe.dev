import { ToggleThemeBtn } from '../ToggleThemeBtn'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export function Header () {
  return (
    <header className='p-2 w-screen z-10 bg-zinc-100 dark:bg-zinc-800 bg-opacity-60 dark:bg-opacity-60 flex items-center justify-between text-gray-900 dark:text-gray-50 fixed'>
      <div className='flex items-center'>
        <h2 className='font-mplus font-bold text-xl'>datsfilipe</h2>
        <a
          href='https://github.com/datsfilipe'
          className='text-xl ml-3 hover:text-2xl transition-all dark:hover:text-neutral-300 hover:text-gray-500'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/datsfilipe'
          className='text-xl ml-3 hover:text-2xl transition-all dark:hover:text-neutral-300 hover:text-gray-500'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://twitter.com/datsfilipe1'
          className='text-xl ml-3 hover:text-2xl transition-all dark:hover:text-neutral-300 hover:text-gray-500'
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitter />
        </a>
      </div>
      <ToggleThemeBtn />
    </header>
  )
}
