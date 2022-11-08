import { ReactElement } from 'react'

interface TimelineProps {
  nodes: ReactElement[];
}

export function Timeline ({ nodes }: TimelineProps) {
  return (
    <ul className='flex flex-col w-full'>
      {nodes.reverse().map((node, index) => (
        <li key={node?.key} className={`flex relative ml-4 before:absolute before:content-[""] before:mx-1 before:h-full before:w-1 before:bg-orange-500 after:content-[""] after:absolute after:mx1 after:self-center after:h-3 after:w-3 after:rounded-full after:border-2 after:border-orange-500 after:bg-neutral-50 after:dark:bg-neutral-900 ${
          nodes.length -1 === index ? 
          'after:rounded-lg after:w-5 after:h-1 after:border-0 after:!bg-orange-500 after:ml-1 before:h-1/2'
          : ''
        }`}><>{node}</></li>
      ))}
    </ul>
  )
}
