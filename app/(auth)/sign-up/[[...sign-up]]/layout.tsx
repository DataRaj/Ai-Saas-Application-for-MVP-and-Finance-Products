import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

// const Layout = ({children}: {children: ReactNode}) => {
  const Layout = () => {
  return (
      <>
      <nav className=' absolute flex flex-1 mb-4 justify-start '>
      <div >
        <Link href="/">
            <Image src="/logo.svg" width={72} height={60} alt='logo'/>
            </Link>
      </div>
    </nav>
    {/* {children} */}
    </>
  )
}

export default Layout
