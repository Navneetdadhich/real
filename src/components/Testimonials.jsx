import React from 'react'
import Testicard from './Testicard'

const Testimonial = () => {
  return (
    <div className='flex flex-col justify-center items-center text-2xl sm:text-4xl font-bold text-gray-700 mt-20 py-25 bg-gray-100'>
        <h2>Testimonials</h2>

      <div className=' flex sm:flex-row  flex-col gap-10 my-14'>
        <Testicard/>
        <Testicard/>
        <Testicard/>
      </div>

    </div>
  )
}

export default Testimonial