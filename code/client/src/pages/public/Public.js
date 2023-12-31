import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navigation, TopHearder, Footer } from '../../components'

const Public = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <TopHearder />
      <Header />
      <Navigation />
      <div className='w-full flex flex-col items-center '>
        <Outlet />
      </div>
      <Footer />
    </div >
  )
}

export default Public