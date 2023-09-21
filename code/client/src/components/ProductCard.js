import React from 'react'
import { formatMoney, renderStarfromNumber } from '../ultils/helpers'


const ProductCard = ({ price, totalRatings, title, image }) => {
    return (
        <div className='w-[30%] flex-auto mt-[20px] flex  px-[10px]'>
            <div className='flex w-full border'>
                <img src={image} alt='products' className='w-[90px] object-contain p-4' />
                <div className=' flex flex-col mt-[15px] items-start gap-1 w-full text-xs'>
                    <span className='line-clamp-1 capitalize lowercase text-sm'>{title?.toLowerCase()} </span>
                    <span>{`${formatMoney(price)} VND`}</span>
                    <span className='flex h-[16px]' >{renderStarfromNumber(totalRatings, 14)} </span>

                </div>
                
            </div>
        </div>
    )
}

export default ProductCard