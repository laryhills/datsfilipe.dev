import { HTMLAttributes, ReactNode } from 'react'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Paragraph ({ children, ...props }: ParagraphProps) {
  const { className, ...rest } = props

  return (
    <p className={`text-justify ${className ? className : ''}`} {...rest}>{children}</p>
  )
}
