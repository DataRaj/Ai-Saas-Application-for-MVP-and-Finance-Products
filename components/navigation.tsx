"use client"

import React, { useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'
import { useMedia } from 'react-use'
import { Button } from './ui/button'
import NavButton from './nav-button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
type routeProps= {
  href: string,
  label: string
}
const routes : routeProps[] = [
   {
    href: "",
    label: "Overview"
  },
  {
    href: "",
    label: "Transactions"
  },
  {
    href: "",
    label: "Accounts"
  },
  {
    href: "",
    label: "Categories"
  },
  {
    href: "",
    label: "Settings"
  }
];

function Navigation() {
  // const [isMobile, setIsMobile] = useState(false);
  const [isOpen,setIsOpen] = useState(false);

  const router = useRouter()
  const pathname = usePathname()
  const isMobile = useMedia("(max-width: 1024px)",false)

  const onClick = (href: string) =>{
    router.push(href)
    setIsOpen(false)
  }
  if(isMobile){
    return (
      <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
          asChild
          size="sm"
          variant="outline"
          className='w-full lg:w-auto justify-between font-normal hover:bg-white/20
                   hover:text-white border-none focus-visible:ring-offset-0 
                     focus-visible:ring-transparent outline-none text-white 
                     focus:bg-white/30 transition'
          >
           <Menu className=' size-4'/> 
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className='px-2'>
          <nav className=' flex flex-col gap-y-2 pt-6'>
            {routes.map((route)=>(
              <Button
              key={route.href}
              variant={route.href === pathname ? "secondary" : "ghost"}
              onClick={onClick(route.href)}>
                {route.label}
              </Button>
              
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      </>
    )
  }
  return (

    <nav className='hidden lg:flex item-center gap-x-2 overflow-x-auto'>
      {
        routes.map((route)=>(
          <NavButton 
          key={route.href}
          href={route.href}
          label={route.label}
          />
        ))
      }
    </nav>
  )
}

export default Navigation
