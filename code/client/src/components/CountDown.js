import React, { memo } from 'react'

const CountDown = ({unit,number}) => {
  return (
    <div className=' m-1 w-[70px] h-[70px] flex rounded-full justify-center items-center bg-gray-100 flex-col'>
        <span className='text-[18px]  text-gray-800'>{number}</span>
        <span className='text-xs text-gray-700 '>{unit}</span>
    </div>
  )
}

export default memo(CountDown)