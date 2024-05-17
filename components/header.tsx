import React from 'react'
import HeaderLogo from './header-logo'
import Navigation from './navigation'
import { UserButton,ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import WelcomeMsg from './welcome-message'

export default function Header() {
  return (
    <header className=' bg-gradient-to-b from-blue-700 
                      to-blue-500 px-4  lg:px-14 pb-36 '>
      <div className=' max-w-screen-2xl mx-auto'>
        <div className="w-full items-center justify-between mb-14">
          <div className=' flex items-center justify-between lg:gap-x-16'>
            <HeaderLogo/>
            <Navigation/>
            <ClerkLoaded>
            <UserButton afterSignOutUrl='/'/>
          </ClerkLoaded>
          </div>
          
          <ClerkLoading>
            <Loader2 className='size-8 animate-spin text-slate-400' />
          </ClerkLoading>
          <WelcomeMsg />
        </div>
      </div>
    </header>
  )
}
