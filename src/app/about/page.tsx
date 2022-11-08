import Image from 'next/image'
import { Timeline } from '../../components/Timeline'

import programmingSvg from '../../assets/undraw_programming.svg'
import developerActivitySvg from '../../assets/undraw_developer_activity.svg'

const nodes = [
  <p key={0} className='py-4 ml-10'>
    Entered high school integrated into Computer Technician course, at IFMA (Federal Institute of Maranhão), 2018
  </p>,
  <p key={1} className='py-4 ml-10'>
    Joined as spectator at FLISOL due to high grades in programming, Facymp Wyden, 2018 - 2019
  </p>,
  <p key={2} className='py-4 ml-10'>
    Started participating at events like NLW, making projects like this, 2020
  </p>,
  <p key={3} className='py-4 ml-10'>
    Finished high school and became a Computer Technician, 2021
  </p>,
  <p key={4} className='py-4 ml-10'>
    Started in a new job at Octal Dev as a Front-End Web Developer, 2022 - now
  </p>
]

export default function About () {
  return (
    <div className='pb-12 mx-auto w-10/12'>
      <div className='flex items-center min-h-screen max-lg:flex-col-reverse max-lg:mt-12'>
        <div className='mr-4 w-1/2 text-lg max-lg:w-full'>
          <h1 className='mb-5 text-4xl font-medium text-orange-500 font-mplus'>About Me</h1>
          <p className='mb-3'>I&apos;m a Front-End Web Developer located in Brazil. I&apos;m passionate about creating and stylying websites to provide simple and rich experience for the final user.</p>
          <p className='mb-3'>Interested in web development ecosystem, always keeping myself updated with the new and promising tools in the market. Also an organized person, with commitment and focus.</p>
          <p className='mb-3'>Work experience of almost a year, but studying web development since high school, where I left as a Computer Technician and currently working as a mid-level developer at an brazilian startup.</p>
        </div>
        <Image src={programmingSvg} alt='Person programming' className='w-1/2 max-lg:mb-4 max-lg:w-full' quality={100} />
      </div>
      <div className='flex items-center min-h-screen max-lg:mt-12 max-lg:flex-col'>
        <Image src={developerActivitySvg} alt='Developer activity' className='w-1/2 max-lg:mb-4 max-lg:w-full' quality={100} />
        <div className='flex flex-col pl-4 w-2/3 text-lg items-left max-lg:w-full'>
          <h1 className='mb-5 text-4xl font-medium text-orange-500 font-mplus'>Timeline</h1>
          <Timeline nodes={nodes} />
        </div>
      </div>
    </div>
  )
}
