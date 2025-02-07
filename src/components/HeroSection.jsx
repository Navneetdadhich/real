import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';

// import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const imgArray = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=400&dpr=1",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
]

const HeroSection = () => {
  return (
    <>
     <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-full h-[50vh] sm:h-[70vh] relative"
      >
        <div className='flex flex-col sm:w-[60vw] mx-auto z-50 absolute top-12 bottom-12 right-12 left-12 sm:top-40 sm:left-50 sm:right-50 sm:bottom-60'>
            <h2 className='text-2xl sm:text-5xl text-center text-white font-bold'>Professional realtor works for you</h2>

            <div className='text-gray-400
            ml-3 mt-10 uppercase sm:ml-40 sm:mt-10 text-xs sm:text-normal'>
                <h2 className='flex '> <h2 className='sm:px-1 text-white sm:pr-2 pr-2 cursor-pointer'> Sale </h2> <h2 className='pr-2 cursor-pointer'>| Rent |</h2> <h2 className='cursor-pointer'>Commercial</h2></h2>
            </div>
            <div className='flex sm:w-[70%] mx-auto flex gap-2 py-2 items-center justify-center'>
                <input type="text" className='w-[70%] bg-white text-xs sm:text-sm p-3 rounded-xs outline-none'  placeholder='Search by city or address ' />
                <button className='w-[30%] sm:w-[20%] bg-orange-400 rounded-xs text-xs sm:text-sm p-3 outline-none font-bold text-white uppercase cursor-pointer' onClick={() => alert("hello")} >Search</button>
            </div>
        </div>

        {imgArray.map(({id, img}) => 
        <SwiperSlide 
        className='text-center text-[18px] flex justify-center items-center'
        key={id}> 
        <img src={img} className='block w-full h-full object-cover brightness-40'/>
         </SwiperSlide>)}
      </Swiper>
    </>
  )
}

export default HeroSection