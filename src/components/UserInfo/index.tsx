export function UserInfo () {
  return (
    <div className='flex items-center font-sans text-lg'>
      <img
        src='https://avatars.githubusercontent.com/u/76636791?v=4'
        className='mr-4 w-28 h-28 rounded-full'
      />
      <div className='flex flex-col'>
        <strong>Filipe Lima</strong>
        <span className='mt-2 text-stone-500'>Web Developer at Octal Dev</span>
      </div>
    </div>
  )
}
