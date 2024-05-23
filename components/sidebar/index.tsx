import React, { ReactElement, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Tooltip, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { menuOptions } from '@/lib/constant'

function Sidebar(props:ReactElement) {
    const pathName = usePathname()
  return (
    <nav className='flex flex-col justify-center items-center 
    gap-10 py-6 px-2 dark:bg-black h-screen overflow-scroll'>
      <div className='flex flex-col justify-center items-center gap-8'>
        <Link className="flex flex-row font-bold" href={'/'}>
            fuzzie.
        </Link>
        <TooltipProvider>
          {menuOptions.map((option) => (
              <ul key={option.name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>

                <li>
                  <Link href={option.href} className='w-8 h-8 flex flex-col justify-center 
                  items-center p-[3px] rounded-lg group cursor-pointer'>
                    <option.Component selected = {pathName === option.href}/>
                  </Link>
                </li>
                    </TooltipTrigger>
                  </Tooltip>
              </ul>
          ))}
        </TooltipProvider>
      </div>
    </nav>
  )
}

// index.propTypes = {
    
// }

export default Sidebar

