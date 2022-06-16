import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Layout = () => {
  return (
    <>
        <Navbar />
        <div className='container w-full'>
        <Outlet />
        </div>
    </>
  )
}

export default Layout
