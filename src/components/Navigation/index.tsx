import { Button } from '../Button'
import { Link } from 'react-router-dom'
import { FaHome, FaUser, FaCommentAlt, FaEnvelope } from 'react-icons/fa'

export function Navigation () {
  return (
    <div className='fixed z-10 bottom-4 w-screen flex items-center justify-center'>
      <nav>
        <ul className='flex'>
          <li className='mx-5'>
            <Link to='/'>
              <Button>
                <FaHome className='mr-2 text-2xl' />
                Begining
              </Button>
            </Link>
          </li>
          <li className='mx-5'>
            <Link to='/about'>
              <Button>
                <FaUser className='mr-2' />
                About me
              </Button>
            </Link>
          </li>
          <li className='mx-5'>
            <Link to='/posts'>
              <Button>
                <FaCommentAlt className='mr-2' />
                Posts
              </Button>
            </Link>
          </li>
          <li className='mx-5'>
            <Link to='/contact'>
              <Button>
                <FaEnvelope className='mr-2' />
                Contact me
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
