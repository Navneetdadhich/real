import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaGooglePlusG, FaLinkedin } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const footer = () => {
  return (
    <div className='flex sm:flex-row flex-col bg-slate-900 w-full sm:h-[50vh] sm:gap-40 gap-15 text-white sm:py-20 p-10'>
        <div>
            <div className='flex flex-col  h-[4rem] sm:px-10'>
                <h1 className='font-bold'>I N T E N S E</h1>
                <p className='text-xs text-orange-300'>Real Estate</p>
            </div>

            <div className='flex gap-2 text-xl'>
                <div className='w-[40px] flex justify-center items-center h-[40px] bg-gray-700 rounded-full'>
                    <FaFacebookF/>
                </div>
                <div className='w-[40px] flex justify-center items-center h-[40px] bg-gray-700 rounded-full'>
                    <FaGooglePlusG/>
                </div>
                <div className='w-[40px] flex justify-center items-center h-[40px] bg-gray-700 rounded-full'>
                    <FaLinkedin/>
                </div>
                <div className='w-[40px] flex justify-center items-center h-[40px] bg-gray-700 rounded-full'>
                    <FaXTwitter/>
                </div>
            </div>
        </div>

        <div className='sm:w-[400px] w-[200px]'>
            <h1 className='font-bold mb-4'>NEWSLETTER</h1>
            <p className='mb-4'>Keep up with the latest company news and event.
                Enter Your email and subscribe to out newsletter.
            </p>

            <div className='flex sm:w-[400px] w-[200px]'>
                <div className='flex justify-center items-center'>

                <IoMail className='sm:w-[50px] w-[20px] mr-3 text-3xl text-white'/>
                </div>
                <input type="text" name="" id="" placeholder='Type your E-Mail' className='w-[250px] bg-white text-gray-700 text-xs sm:text-sm p-2'/>
                <button className='w-[100px] h-[40px]
                bg-orange-400 text-xs sm:text-sm sm:p-2 cursor-pointer p-2'>subscribe</button>
            </div>
        </div>

        <div>
            <h2 className='font-bold uppercase mb-4'>Useful links</h2>
            <p>Properties</p>
            <p>Amenities</p>
            <p>Rentals</p>
            <p>Mortgages</p>
            <p>Agents</p>
        </div>

        <div className='flex flex-col '>
        <h2 className='font-bold uppercase mb-4'>Latest News</h2>

        <p className='text-xs'>{`-> 05/04/2003`}</p>
        <p className='mb-4'>Top 10 Apartments in LA</p>
        <p className='text-xs'>{`-> 05/04/2003`}</p>
        <p className='mb-4'>Top Residential Properties</p>
        <p className='text-xs'>{`-> 05/04/2003`}</p>
        <p className='mb-4'>Features of Mortgage Loans</p>
        </div>

    </div>
  )
}

export default footer