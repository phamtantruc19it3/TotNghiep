import React, { memo } from 'react'
import icons from '../ultils/icons'

const { BiMailSend } = icons
const Footer = () => {
    return (
        <div className='w-full '>
            <div className='h-[103px] w-full bg-main flex justify-center items-center'>
                <div className='w-main flex items-center justify-between'>
                    <div className='flex flex-col flex-1'>
                        <span className='text-[20px] text-gray-100'> SIGN UP TO NEWSLETTER </span>
                        <smail className='text-[13px] text-gray-300'>Subscribe now and receive weekly newsletter</smail>
                    </div>
                    <div className='flex flex-1 items-center'>
                        <input type='text' placeholder='example@gmail.com'
                            className=' p-4 w-full rounded-l-full  bg-[#ffffffeb] outline-none text-[#787878]' />
                    </div>
                    <div className='w-[56px] h-[56px] flex rounded-r-full bg-[#ffffffeb] text-red justify-center items-center'>
                        <BiMailSend size={30} />
                    </div>
                </div>
            </div>
            <div
                className='h-[407px] w-full flex items-center justify-center text-[#ffffff] text-[15px]
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
                <div className='w-main flex' >

                    <div className='flex-2 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border border-main pl-[15px]'>CONTACT</h3>
                        <span>
                            <span>Address: </span>
                            <span className='opacity-70'> 470 Trần Đại Nghĩa, Quận Ngũ Hành Sơn, Tp Đà Nẵng.</span>
                        </span>
                        <span>
                            <span>Phone</span>
                            <span className='opacity-70'>(+84)329746843 </span>

                        </span>
                        <span>
                            <span>Mail</span>
                            <span className='opacity-70'>pttruc.19it3@vku.udn.vn</span>

                        </span>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border border-main pl-[15px]'>INFORMATION </h3>
                        <span>Typography</span>
                        <span>Gallery</span>
                        <span>Store Location</span>
                        <span>Today's Deals</span>
                        <span>Contact </span>
                    </div>
                     <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border border-main pl-[15px]'>ABOUT US </h3>
                        <span>Help</span>
                        <span>Free Shipping</span>
                        <span>FAQs</span>
                        <span>Return & Exchange</span>
                        <span>Testimonials </span>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <h3 className='mb-[20px] text-[15px] font-medium border border-main pl-[15px]'>#DIGITALWORLDSTORE</h3>
            
                    </div>

                </div>
            </div>
        </div>
    )
}

export default memo(Footer)