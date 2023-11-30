import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import path from '../ultils/path'
import { getCurrent } from '../store/user/asyncActions'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../ultils/icons'
import { logout } from '../store/user/userSlice'

const { MdLogout } = icons

const TopHearder = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, current } = useSelector(state => state.user)
  useEffect(() => {
    if (isLoggedIn) dispatch(getCurrent())

  }, [dispatch, isLoggedIn])
  return (
    <div className=' h-[38px] w-full bg-main flex items-center justify-center'>
      <div className=' w-main flex items-center justify-between text-xs text-white'>
        <span> ORDER ONLINE OR CALL FOR US (+84)329746843  </span>
        {isLoggedIn
          ? <div className='flex gap-4 text-sm items-center'>
               <span>{` Welcome, ${current?.firstname} ${current?.lastname} `}</span>
               <span className=' hover:bg-gray-800 hover:rounded-full p-2 cursor-pointer'>
                <MdLogout size={18} 
                onClick={()=>dispatch(logout())}
                /> 
                </span>
          </div>
          :   <Link className='hover:text-gray-800' to={`/${path.LOGIN}`}> Sign up or Login <u>  HERE</u> </Link>}
      </div>
    </div>
  )
}

export default memo(TopHearder)