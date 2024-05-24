'use client'
import React, { ComponentType, ForwardRefExoticComponent, HTMLInputTypeAttribute, ReactComponentElement, ReactElement, ReactNode, RefAttributes } from 'react'
import PropTypes from 'prop-types'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Tooltip, TooltipProvider, TooltipTrigger,TooltipContent } from '../ui/tooltip'
import { menuOptions } from '@/lib/constant'
import { Separator } from '../ui/separator'
import { DatabaseIcon, GitBranch, GitBranchIcon, LucideMousePointer, LucideMousePointerClick, LucideProps, MousePointerClickIcon } from 'lucide-react'

function Sidebar() {
    const pathName = usePathname()
  return (
    <nav className='flex flex-col justify-start items-center 
    gap-10 py-6 px-1 dark:bg-black overflow-scroll'>
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
                    <TooltipContent side='right' 
                    className=' backdrop-blur-xl bg-black/50 ml-4'>
                      <p>{option.name} </p>
                    </TooltipContent>
                  </Tooltip>
              </ul>
          ))}
        </TooltipProvider>
        <Separator/>
        <div className='flex flex-col items-center gap-6 dark:bg-[#353346]/20
        py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]'>
         <IconComponent Icon={MousePointerClickIcon} />
         <IconComponent Icon={GitBranchIcon}/>
         <IconComponent Icon={DatabaseIcon}/>

        </div>
      </div>
    </nav>
  )
}

type IconpropTypes = {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  className?: string;
  size?: number;
}

function IconComponent({ Icon, className = 'dark:text-white', size = 18 }: IconpropTypes) {
  return (
    <>
      <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
          <Icon
              className={`${className}`}
              size={size}
              />
      <div className="mt-2 border-l-2 border-muted-foreground/50 h-5 absolute left-1/2 transform -translate-x-1/2 -bottom-30px" />
      </div>
              </>
  );
}


export default Sidebar

