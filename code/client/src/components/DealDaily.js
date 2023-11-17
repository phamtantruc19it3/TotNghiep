import React, { useState, useEffect, memo } from 'react'
import icons from '../ultils/icons'
import { apiGetProducts } from '../apis/product'
import { formatMoney, renderStarfromNumber } from '../ultils/helpers'
import { CountDown } from './'

const { BsStarFill, TbListDetails } = icons
let idInterval

const DealDaily = () => {
    const [dealdaily, setDealdaily] = useState(null)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [expireTime, setExpiretime] = useState(false)



    const fetchDealDaily = async () => {
        const response = await apiGetProducts({ limit: 1, page: Math.round(Math.random() * 10), totalRatings: 5 })
        if (response.success) {
            setDealdaily(response.products[0])
            const h=24- new Date().getHours()
            const m=60- new Date().getMinutes()
            const s=60- new Date().getSeconds()

            setHours(h)
            setMinutes(m)
            setSeconds(s)
        } else{
            setHours(0)
            setMinutes(59)
            setSeconds(59)
        }

    }
    // useEffect(() => {
    //     fetchDealDaily()
    // }, [])
    useEffect(() => {
        idInterval && clearInterval(idInterval)
        fetchDealDaily()

    }, [expireTime])
    useEffect(() => {
        idInterval = setInterval(() => {
            if (seconds > 0) setSeconds(prev => prev - 1)
            else {
                if (minutes > 0) {
                    setMinutes(prev => prev - 1)
                    setSeconds(59)
                } else {
                    if (hours > 0) {
                        setHours(prev => prev - 1)
                        setMinutes(59)
                        setSeconds(59)
                    }
                    else {
                        setExpiretime(!expireTime)
                    }
                }
            }
        }, 1000)
        return () => {
            clearInterval(idInterval)
        }
    }, [seconds, minutes, hours, expireTime])

    return (
        <div className=' border w-full flex-auto'>
            <div className='flex items-center justify-between p-4'>
                <span className='flex-1 flex ' >  <BsStarFill size={20} color='#DD1111' /></span>
                <span className='flex-8 font-semibold text-[20px] flex justify-center text-gray-700'>  DEAL DAILY </span>
                <span className='flex-1'></span>
            </div>
            <div className='w-full flex flex-col items-center pt-8 px-4 gap-2'>
                <img src={dealdaily?.thumb || 'https://stores.maxfashion.in/VendorpageTheme/Enterprise/EThemeForMax/images/product-not-found.jpg'}
                    alt='' className='w-full object-cover '
                />
                <span className='line-clamp-1 text-center'>{dealdaily?.title}</span>
                <span className='flex h-[16px]' >{renderStarfromNumber(dealdaily?.totalRatings, 20)?.map((el, index)=>(
                    <span key={index}> {el}</span>
                )) }</span>
                <span>{`${formatMoney(dealdaily?.price)} VND`}</span>
            </div>
            <div className=' px-4 mt-8'>
                <div className=' flex justify-center gap-2 items-center mb-4'>
                    <CountDown unit={'Hours'} number={hours} /> <span id='tt'> : </span>
                    <CountDown unit={'Minutes'} number={minutes} /><span id='tt'> : </span>
                    <CountDown unit={'Seconds'} number={seconds} />
                </div>
                <button
                    type='button'
                    className='rounded-lg py-2 flex gap-2 items-center justify-center w-full bg-main hover:bg-gray-800  text-white font-medium'
                >
                    <TbListDetails />
                    <span>Option</span>
                </button>
            </div>
        </div>

    )
}

export default memo(DealDaily)