import { Book, Headphones, Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { UserButton } from '@clerk/nextjs'

function Infobar() {
  return (
    <div className='flex flex-row justify-end gap-6 items-center p-4 w-full dark:bg-black'>
        <span className=' flex items-center bg-muted px-4 rounded-full'>
            <Search/>
            <Input 
            placeholder='Quick Search'
            className='border-none '
            />
        </span>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Headphones/>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Contact Suport</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Book/>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Guide</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <UserButton/>
    </div>
  )
}

export default Infobar
