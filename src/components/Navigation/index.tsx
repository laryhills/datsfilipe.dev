import Link from 'next/link'
import { Button } from '../Button'
import { FaHome, FaUser, FaCommentAlt, FaEnvelope } from 'react-icons/fa'

export function Navigation () {
  return (
    <div className='flex fixed bottom-4 z-10 justify-center items-center w-screen'>
      <nav>
        <ul className='flex'>
          <li className='mx-5'>
            <Link href='/'>
              <Button>
                <FaHome className='mr-2 text-xl' />
                beginning
              </Button>
            </Link>
          </li>
          <li className='mx-5'>
            <Link href='/about'>
              <Button>
                <FaUser className='mr-2' />
                about
              </Button>
            </Link>
          </li>
          <li className='mx-5'>
            <Link href='/posts'>
              <Button>
                <FaCommentAlt className='mr-2' />
                posts
              </Button>
            </Link>
          </li>
          <li className='mx-5'>
            <Link href='/contact'>
              <Button>
                <FaEnvelope className='mr-2' />
                contact
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
