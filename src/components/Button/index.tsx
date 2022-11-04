import type { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button ({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className='flex items-center py-4 px-5 text-xl font-medium rounded-xl transition-all bg-stone-700 text-neutral-50 font-mplus dark:bg-zinc-300 dark:hover:bg-neutral-50 dark:text-stone-700 hover:bg-stone-800'>
      {children}
    </button> 
  )
}
