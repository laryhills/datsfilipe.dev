import { HTMLAttributes, ReactNode } from 'react'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function Title ({ children, ...props }: TitleProps) {
  const { className, ...rest } = props

  return (
    <h1 className={`text-4xl font-bold text-orange-500 font-mplus ${className}`} {...rest}>{children}</h1>
  )
}
