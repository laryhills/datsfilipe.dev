import { HTMLAttributes, ReactNode } from 'react'

interface SectionProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

export function Section ({ children, ...props }: SectionProps) {
  const { className, ...rest } = props

  return (
    <section className={`flex items-center min-h-screen ${className}`} {...rest}>
      {children}
    </section>
  )
}
