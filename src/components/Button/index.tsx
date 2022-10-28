import type { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button ({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className='bg-stone-700 text-neutral-50 hover:bg-stone-800 dark:bg-zinc-300 dark:hover:bg-neutral-50 dark:text-stone-700 text-xl font-mplus font-medium rounded-xl transition-all px-5 py-4 flex items-center'>
      {children}
    </button> 
  )
}
