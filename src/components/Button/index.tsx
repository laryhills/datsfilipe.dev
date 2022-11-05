import type { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button ({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className='flex items-center py-2 px-4 text-base font-medium rounded-md transition-all text-stone-300 bg-neutral-700 dark:bg-stone-400 dark:text-neutral-900 hover:brightness-125 hover:translate-y-[-4px]'>
      {children}
    </button> 
  )
}
