import type { HTMLAttributes, ReactElement } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactElement;
}

export function Button ({ children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {children}
    </button> 
  )
}
