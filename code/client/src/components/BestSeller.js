import React, { useState, useEffect } from 'react'
import { apiGetProducts } from '../apis/product'
import { Product, CuSlider } from './';
import { getNewProducts } from '../store/products/AsyncActions'
import { useDispatch, useSelector } from 'react-redux';


const tabs = [
    { id: 1, name: 'best sallers' },
    { id: 2, name: 'new arrivals' },
    { id: 3, name: 'like new' },
]

export const BestSeller = () => {
    const [bestSellers, setBestSellers] = useState(null)
    const [activedTab, setActivedTab] = useState(1)
    const [products, setprpducts] = useState(null)
    const dispatch = useDispatch()
    const { newProducts } = useSelector(state => state.products)


    const fetchProducts = async () => {
        const response = await apiGetProducts({ sort: '-sold' })
        if (response.success) {
            setBestSellers(response.products)
            setprpducts(response.products)
        }

    }
    useEffect(() => {
        fetchProducts()
        dispatch(getNewProducts())
    }, [])

    useEffect(() => {
        if (activedTab === 1) setprpducts(bestSellers)
        if (activedTab === 2) setprpducts(newProducts)
    }, [activedTab])
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
            <div className='mt-4 px-[-5px] border-t-2 border-main pt-4'>
                <CuSlider products={products} activedTab={activedTab} />
            </div>
            <div className='w-[100%] flex gap-4 mt-4'>
                <img src='https://res.cloudinary.com/dhsy9wkeb/image/upload/v1700811595/samples/ecommerce/banner_ggoivu.webp' alt='banner'
                    className='flex-1 object-contain'
                />
                {/* <img src='https://laptop88.vn/media/product/6062_dell_inspiron_7501_n2101012w_2.jpg' alt='banner'
                    className='flex-1 object-contain'
                /> */}

            </div>
        </div >
    )
}

export default BestSeller