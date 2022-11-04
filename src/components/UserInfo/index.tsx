export function UserInfo () {
  return (
      <div className='flex items-center font-sans text-lg'>
      <img
        src='https://github.com/datsfilipe.png'
        className='mr-4 w-28 h-28 rounded-full'
      />
      <div className='flex flex-col'>
        <strong>Filipe Lima</strong>
        <span className='mt-2 text-stone-500 dark:text-stone-400'>Web Developer at Octal Dev</span>
      </div>
    </div>
  )
}
