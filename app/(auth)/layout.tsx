import React, { ReactNode } from 'react'
type childrenProps = {
    children: ReactNode
}
const Layout = ({children}: childrenProps) => {
  return (
    <div>
      {children}
    </div>
  )
} 
export default Layout
