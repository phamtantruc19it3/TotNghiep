import React from 'react'
import logo from '../assets/logo.png'
import icons from '../ultils/icons'
import { Link } from 'react-router-dom'
import path from '../ultils/path'

const Header = () => {
  const { BsFillTelephoneOutboundFill, MdEmail, HiOutlineShoppingCart, HiUserCircle, BsFacebook, BsInstagram } = icons
  return (
    <div className=' w-main flex justify-between h-[100px]  '>
      <Link to={`/${path.HOME}`}>
        <img src={logo} alt='logo' className='w-[100px] object-contain' />
      </Link>

      <div className='flex text-[13px] py-7' >
        <div className='flex flex-col items-center px-6 border-r '>
          <span className=' flex gap-4 items-center'>
            <BsFillTelephoneOutboundFill size={24} color='red' />
            <span className='font-semibold'> (+84)329 746 843</span>
          </span>
          <span>Mon-Sat 05:00AM - 10:00 PM</span>
        </div>
        <div className='px-10'>
          <a href='https://www.facebook.com/'>
            <span className=' flex gap-2 items-center text-[15px] '>
              <BsFacebook size={24} color='blue' />
              <span className='font-semibold'> Facebook</span>
            </span>
          </a>
        </div>

        <div>
          <a href='https://www.facebook.com/'>
            <span className=' flex gap-2 items-center text-[15px] '>
              <BsInstagram size={24} />
              <span className='font-semibold'>Instagram</span>
            </span>
          </a>
        </div>


        {/* // flex flex-col items-center px-6 border-r  */}
        <div className='flex flex-col justify-center items-center px-6 border-r'>
          <span className=' flex gap-4 items-center'>
            <MdEmail size={24} color='red' />
            <span className='font-semibold'> SUPPORT@VKU.UDN.VN</span>
          </span>
          <span>Online support 24/7</span>
        </div>

        <div className='flex items-col justify-center gap-2 px-5  border-r'>
          <span className=' flex  items-col '>
            <HiOutlineShoppingCart color='red' size={24} />
          </span>
          <span> 0 item(s) </span>
        </div>

        <div className='flex items-center justify-center px-6 '>
          <HiUserCircle size={24} />
        </div>
      </div>
    </div>

  )
}

export default Header