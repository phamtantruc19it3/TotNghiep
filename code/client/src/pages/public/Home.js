import React from 'react'
import { Banner, Sidebar, BestSeller, DealDaily, FeatureProducts, Product, CuSlider } from '../../components'
import { useSelector } from 'react-redux'
import icons from '../../ultils/icons'


const { IoMdArrowDropright } = icons
const Home = () => {
  const { newProducts } = useSelector(state => state.products)
  const { categories } = useSelector(state => state.app)
const {isLoggedIn, current} = useSelector(state => state.user)

  return (
    <>
      <div className='w-main flex '>
        <div className=' flex-col flex gap-5 w-[25%] flex-auto '>
          <Sidebar />
          {/* <DealDaily /> */}

        </div>
        <div className=' flex-col flex gap-5 pl-5 w-[75%] flex-auto '>
          <Banner />
          <BestSeller />
        </div>
      </div>
      <div className=' my-8'>
        <FeatureProducts />
      </div>
      <div className=' my-8 w-full'>
        <h3 className='text-[20px] font-semibold py-[15px] border-b-2 border-main'>NEW ARRIVALS</h3>
        <div className=' mt-4 mx-[-10px]  '>
          <CuSlider
            products={newProducts}
          />

        </div>
      </div>
      <div className=' my-8 w-full'>
        <h3 className='text-[20px] font-semibold py-[15px] border-b-2 border-main'>HOT COLLECTIONS</h3>
        <div className='flex flex-wrap gap-4 mt-4 '>
          {categories?.filter(el => el.brand.length > 5)?.map(el => (
            <div
              key={el.id}
              className='w-[30%] '
            >
              <div className='border flex p-4 gap-4 min-h-[30%] '>
                <img alt='' src={el.image} className=' w-[30%] h-[30%] object-cover flex-1' />
                <div className='flex-1 text-gray-700'>
                  <h4 className=' font-semibold uppercase '> {el.title}</h4>
                  <ul className='text-sm '>
                    {el?.brand?.map(item => (
                      <span className='flex gap-1 items-center text-gray-500'>
                        <IoMdArrowDropright size={14} />
                        <li key={item}>{item}</li>
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=' my-8 w-full'>
          <h3 className='text-[20px] font-semibold py-[15px] border-b-2 border-main'>BLOG POSTS</h3>
        </div>
      </div>
    </>
  )
}

export default Home