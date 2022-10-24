export function UserInfo () {
  return (
      <div className='font-sans text-lg flex items-center'>
      <img
        src='https://github.com/datsfilipe.png'
        className='rounded-full w-28 h-28 mr-4'
      />
      <div className='flex flex-col'>
        <strong>Filipe Lima</strong>
        <span className='text-stone-500 dark:text-stone-400 mt-2'>Web Developer at Octal Dev</span>
      </div>
    </div>
  )
}
