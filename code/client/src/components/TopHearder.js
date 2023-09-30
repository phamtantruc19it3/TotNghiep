import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import path from '../ultils/path'

const TopHearder = () => {
  return (
    <div className=' h-[38px] w-full bg-main flex items-center justify-center'>
        <div className=' w-main flex items-center justify-between text-xs text-white'> 
        <span> ORDER ONLINE OR CALL FOR US (+84)329746843  </span>
        <Link to={`/${path.LOGIN}`}> Sign up or Login <u>  HERE</u> </Link>
         </div>
    </div>
  )
}

export default memo(TopHearder)