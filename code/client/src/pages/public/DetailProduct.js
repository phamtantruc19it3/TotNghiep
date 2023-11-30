import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGetProduct } from '../../apis'
import { Breadcrumb } from '../../components'
import Slider from 'react-slick';
import ReactImageMagnify from 'react-image-magnify';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const DetailProduct = () => {
  const erroImg = 'https://res.cloudinary.com/dhsy9wkeb/image/upload/v1701176262/samples/ecommerce/icon-image-not-found-free-vector_qilutn.jpg'
  const { pid, title, category } = useParams()
  const [product, setProduct] = useState(null)
  const fetchProductData = async () => {
    const response = await apiGetProduct(pid)
    if (response.success) setProduct(response.productData)
    console.log(response)
  }
  useEffect(() => {
    if (pid) fetchProductData()
  }, [pid])
  return (
    <div className='w-full '>
      <div className='h-[81px] flex justify-center items-center bg-gray-100'>
        <div className='w-main'>
          <Breadcrumb title={title} category={category} /><span>{title}</span>

        </div>
      </div>
      <div className='w-main m-auto mt-4 flex'>
        <div className='w-[40%] flex flex-col gap-4'>
          <div className='w-[90%] border'>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: product?.thumb ? product?.thumb : erroImg
              },
              largeImage: {
                src: product?.thumb ? product?.thumb : erroImg,
                width: 1200,
                height: 1200
              }
            }} />
          </div>
          {/* <img src={product?.images ? product?.images : erroImg} alt='' className='w-[95%]  border object-cover' /> */}
          <div className='w-[90%] items-center justify-center'>
            <Slider {...settings} className='image-slider'>
              {product?.images?.map(el => (
                <div key={el}
                  className='flex w-full gap-2 justify-around'
                >
                  <img src={el} alt='sub-product' className=' border object-cover  ' />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='w-[40%]  border border-purple-400'>
          pri
        </div>
        <div className='w-[20%] border border-green-400'>
          infor
        </div>
      </div>
      <div className='h-[500px]'></div>
    </div>
  )
}

export default DetailProduct