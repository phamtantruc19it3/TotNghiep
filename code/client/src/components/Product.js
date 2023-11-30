import React, { useState } from 'react'
import { formatMoney } from '../ultils/helpers'
import label from '../assets/label.gif'
import trending from '../assets/tranding.gif'
import { renderStarfromNumber } from '../ultils/helpers'
import { SelectOption } from './'
import icons from '../ultils/icons'
import { Link } from 'react-router-dom'
import path from '../ultils/path'

const { BsFillHeartFill, BsEyeFill, TbListDetails } = icons

const Product = ({ productData, isNew }) => {
  const [isShowOption, setisShowOption] = useState(false)
  return (
    <div className='w-full text-base px-[10px]'>
      <Link className='w-full border p-[15px]  flex flex-col items-center'
        to={`/${productData?.category?.toLowerCase()}/${productData?._id}/${productData?.title}`}
        onMouseEnter={e => {
          e.stopPropagation()
          setisShowOption(true)
        }}
        onMouseLeave={e => {
          e.stopPropagation()
          setisShowOption(false)
        }}

      >

        <div className='w-full relative'>
          {isShowOption && <div className='absolute bottom-0 left-0 right-0 flex justify-center gap-3 animate-slide-top'>
            <SelectOption icon={<BsFillHeartFill />} />
            <SelectOption icon={<BsEyeFill />} />
            <SelectOption icon={<TbListDetails />} />

          </div>}
          <img src={productData?.thumb || 'https://stores.maxfashion.in/VendorpageTheme/Enterprise/EThemeForMax/images/product-not-found.jpg'}
            alt='' className='w-[274px]] h-[274px]] object-cover '
          />
          <img src={isNew ? label : trending} alt=''
            className='absolute top-0 right-[-15px] w-[80px] h-[62px] object-cover rounded-full ' />

        </div>

        <div className=' flex flex-col mt-[15px] items-start gap-1 w-full'>
          <span className='line-clamp-1'>{productData?.title}</span>
          <span>{`${formatMoney(productData?.price)} VND`}</span>
          <span className='flex h-[16px]' >{renderStarfromNumber(productData?.totalRatings)?.map((el, index) => (
            <span key={index}> {el} </span>
          ))}</span>

        </div>
      </Link>

    </div>
  )
}

export default Product