'use client'
import { motion } from 'framer-motion'
import type { ReactNode, HTMLAttributes } from 'react'
import type { MotionProps } from 'framer-motion'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export function Button ({ children, ...props }: ButtonProps & MotionProps) {
  const { className, ...rest } = props

  return (
    <motion.button
      {...rest}
      className={`flex items-center py-2 px-8 text-lg font-medium rounded-xl hover:cursor-pointer w-fit bg-stone-300 border border-stone-400 dark:border-stone-500 text-neutral-900 dark:text-stone-300 dark:bg-neutral-700 ${className ? className : ''}`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.button> 
  )
}
