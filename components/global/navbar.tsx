// "use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {

}
type routes = { 
    name: string,
    href: string
}
const routes: routes[] = [
    {
        name: "Products",
        href: "/products"
    },
    {
        name: "Pricing",
        href: "/pricing"
    },
    {
        name: "Clients",
        href: "/clients"
    },
    {
        name: "Resources",
        href: "/resources"
    },
    {
        name: "Documentation",
        href: "/documentaion"
    },
    {
        name: "Enterprise",
        href: "/enterprise"
    },

]
 const Navbar = (props: props) => {
  return (
    <header className='fixed right-0 left-0 top-0 p-4 bg-black/40 backdrop-blur-lg
                        z-[100] flex items-center border-b-[1px] border-neutral-900 
                        justify-between
    '>
      <aside className='flex items-center gap-[2px]'>
        <p className=' text-3xl font-bold'>
            Fu
        </p>
        <Image src="" alt='maim-logo' width={15} height={15} className='shadow-sm'/>
        <p className=' text-3xl font-bold'>
            zie
        </p>
      </aside>
      <nav className='absolute left-[50%] top-[50%] translate-x-[-50%] transform
                      translate-y-[-50%] hidden md:block'>
                        <ul className='flex items-center gap-4 list-none'>
                            {routes.map((route, index)=>(
                                <li key={index}>
                                    <Link href={route.href}>{route.name}</Link>
                                </li>
                            ))}
                        </ul>
      </nav>
    </header>

  )
}

export default Navbar
