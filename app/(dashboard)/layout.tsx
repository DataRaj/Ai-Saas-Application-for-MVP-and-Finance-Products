import React, { ReactNode } from 'react'
import Header from '@/components/header'

function DashboardLayout({children}:{children:ReactNode}) {
  return (
    <>
    <Header/>
    <main className='px-3 lg:px-14'>
        This is Dashboard Layout
      {children}
    </main>
    </>
  )
}

export default DashboardLayout;

