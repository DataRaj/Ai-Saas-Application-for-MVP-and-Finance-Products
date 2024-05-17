import { useUser } from '@clerk/nextjs'
import React from 'react'

const WelcomeMsg = () => {
    // const {user, userLoader} = useUser
  return (
    <div className=' space-y-2 mt-8'>
      <h2 className='text-2xl lg:text-4xl text-white font-medium'>
        Welcome Back, Dattaraj 
      </h2>
      {/* here we are done with the front-end dashboard things and designs please coperate for more! */}
      <p className='text-sm text-[#89b6fd]'>
        This are you are financial reports
      </p>
    </div>
  )
}

export default WelcomeMsg
