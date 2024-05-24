

import React, { ReactNode } from 'react'
import Header from '@/components/header'
import Navbar from '@/components/global/navbar';
import Sidebar from '@/components/sidebar';

function DashboardLayout({children}:{children:ReactNode}) {
  return (
    <>
    {/* <Header/> */} 
      {/* <Navbar/> */}
      <div className='flex flex-1 justify-start items-center'>
      
    <Sidebar />
      </div>
      
        <main className='px-3 lg:px-14'>
      {children}
    </main>
    </>
  )
}

export default DashboardLayout;

