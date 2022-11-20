import { BsArrowUpRight } from 'react-icons/bs'
import { HTMLAttributes, ReactNode } from 'react'

interface CustomLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  target?: string;
}

export function CustomLink ({ children, ...props }: CustomLinkProps) {
  return (
    <a {...props} className='inline-flex items-center transition-all hover:underline w-fit group text-neutral-800 dark:text-neutral-50'>
      {children}
      &nbsp;
      <BsArrowUpRight className='transition-all group-hover:ml-1' />
    </a>
  )
}
