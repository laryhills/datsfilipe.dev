import { Title } from '../../components/Title'

export default function Contact () {
  return (
    <div className='flex flex-col justify-center items-center mx-10 min-h-screen'>
      <main className='flex flex-col items-center w-full max-w-3xl'>
        <Title className='my-14 text-8xl font-mplus'>Say Hello!</Title>
        <form className='flex flex-col [&>*]:mb-4 w-full'>
          <label htmlFor='email' className='font-serif text-lg font-medium'>Your email:</label>
          <input
            type='email'
            id='email'
            className='p-4 font-serif rounded-3xl border-2 border-stone-400 text-neutral-900 placeholder:text-neutral-400 placeholder:italic bg-neutral-100 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:border-stone-700 dark:bg-neutral-800'
            placeholder='datsfilipe.dev@gmail.com'
          />
          <label htmlFor='message' className='font-serif text-lg font-medium'>Your message:</label>
          <textarea
            id='message'
            className='p-4 font-serif rounded-3xl border-2 resize-none text-neutral-900 placeholder:text-neutral-400 placeholder:italic border-stone-400 bg-neutral-100 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:border-stone-700 dark:bg-neutral-800'
            rows={6}
            placeholder='Hello...'
          />
        </form>
      </main>
    </div>
  )
}
