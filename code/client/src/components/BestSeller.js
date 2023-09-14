import React, { useState, useEffect } from 'react'
import { apiGetProducts } from '../apis/product'
import Product from './Product';
import Slider from "react-slick";

const tabs = [
    { id: 1, name: 'best sallers' },
    { id: 2, name: 'new arrivals' },
    { id: 3, name: 'like new' },

]
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

export const BestSeller = () => {
    const [bestSellers, setBestSellers] = useState(null)
    const [newProducts, setnewPrpducts] = useState(null)
    const [activedTab, setActivedTab] = useState(1)
    const [products, setprpducts] = useState(null)
    


    const fetchProducts = async () => {
        const response = await Promise.all([apiGetProducts({ sort: '-sold' }), apiGetProducts({ sort: '-createdAt' })])
        if (response[0]?.success) {
            setBestSellers(response[0]?.products)
            setprpducts(response[0]?.products)
        }
        if (response[1]?.success) setnewPrpducts(response[1]?.products)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(()=>{
        if(activedTab===1) setprpducts(bestSellers)
        if(activedTab===2) setprpducts(newProducts)
    },[activedTab])
    return (
        <div>
            <div className=' flex text-[20px]  border-main ml-[-32px]'>
                {tabs.map(el => (
                    <span
                        key={el.id}
                        className={` font-semibold capitalize px-8 border-r-2 cursor-pointer pr-10 text-gray-400 ${activedTab === el.id ? 'text-gray-900 ' : ''} `}
                        onClick={() => setActivedTab(el.id)}
                    >{el.name}</span>
                ))
                }
                {/* <span className='font-bold capitalize border-r-2 pr-10'>Best Seller</span>
                <span className='font-bold capitalize '>News Arrivals</span> */}
            </div >
            <div className='mt-4 mx-[-5px] border-t-2 border-main pt-4'>
                <Slider {...settings}>
                    {products?.map(el => (
                        <Product

                            key={el.id}
                            pid={el.id}
                            productData={el}
                            isNew={activedTab===1 ? false: true}
                        />
                    ))}
                </Slider>
            </div>
            <div className='w-[468px] flex gap-4 mt-4'>
               <img src='https://dashboard.cellphones.com.vn/storage/dell inspirion.png' alt='banner'
                className='flex-1 object-contain'
                />
               <img src='https://dashboard.cellphones.com.vn/storage/595-100-Laptop-750.jpg' alt='banner'
               className='flex-1 object-contain'
                />

            </div>
        </div >
    )
}

export default BestSeller