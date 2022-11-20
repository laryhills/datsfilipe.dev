import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode;
}

export function Card ({ children }: CardProps) {
  return (
    <div className='flex p-4 w-full rounded-lg bg-noise-bg bg-stone-300 text-neutral-600 dark:text-neutral-400 dark:bg-zinc-900'>
      {children}
    </div>
  )
}
