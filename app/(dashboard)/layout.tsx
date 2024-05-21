

import React, { ReactNode } from 'react'
import Header from '@/components/header'
import Navbar from '@/components/global/navbar';

function DashboardLayout({children}:{children:ReactNode}) {
  return (
    <>
    {/* <Header/> */}
    <Navbar/>
    <main className='px-3 lg:px-14'>
        This is Dashboard Layout
      {children}
    </main>
    </>
  )
}

export default DashboardLayout;

