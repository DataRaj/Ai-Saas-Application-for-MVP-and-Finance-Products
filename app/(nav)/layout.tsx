

import React, { ReactNode } from 'react'
import Header from '@/components/header'
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import Infobar from '@/components/infobar';

function DashboardLayout({children}:{children:ReactNode}) {
  return (
    <div className="flex overflow-hidden h-screen">
       <Sidebar />
      <div className="w-full">
        <Infobar/>
        {children}
      </div>
    </div>
  )
}
export default DashboardLayout;

