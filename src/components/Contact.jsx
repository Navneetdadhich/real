import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/1655901/pexels-photo-1655901.jpeg?auto=compress&cs=tinysrgb&w=600')] w-full sm:h-[90vh] bg-no-repeat bg-cover flex flex-col justify-center items-center text-2xl sm:text-4xl font-bold text-gray-700 py-10 sm:py-25 bg-gray-100 text-white gap-10 sm:gap-25">
         <h2 className='mt-7'>Get In Touch</h2>

         <div className='flex flex-col gap-4 sm:gap-8 justify-center items-center'>
            <div className='flex sm:flex-row flex-col gap-4'> 
                <input type="text" name="firstname" placeholder='First name:' id=""
                className='border order-white rounded-md text-sm p-2 w-[300px] sm:w-[400px] h-[50px] ' />
                <input type="text" name="lastname" id="" placeholder='Last name:' 
                className='border order-white rounded-md text-sm p-2 w-[300px] sm:w-[400px] h-[50px]'
                />
                </div>

            <div className='flex gap-4 sm:flex-row flex-col'>
                <input type="text" name="" id="" placeholder='Phone:'
                className='border order-white rounded-md text-sm p-2 w-[300px] sm:w-[400px] h-[50px] '
                />
                <input type="text" name="" id="" placeholder='E-mail:'
                className='border order-white rounded-md text-sm p-2 w-[300px] sm:w-[400px] h-[50px]'
                />

            </div>

            <textarea type="message" name="" id="" 
            placeholder='message:'
            className='border order-white rounded-md text-sm p-2 w-[300px] sm:w-[820px] h-[150px]'
            />
         <button className='rounded-md w-[200px] h-[50px] p-2 text-lg bg-orange-400 cursor-pointer'> Send Message </button>
         </div>

    </div>
  )
}

export default Contact