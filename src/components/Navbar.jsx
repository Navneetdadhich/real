import React, { useState } from 'react';
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
   <nav className='w-[80vw] mx-8 sm:mx-auto'>
    <div className='flex flex-col sm:flex-row justify-between items-center py-2 border-b-2 border-gray-300'>
        <ul className='flex gap-4 text-md text-gray-500 m-4'>
            <li className='uppercase'>Login</li>
            <li className='uppercase'>Register</li>
        </ul>

        <ul className='flex gap-6 text-xs sm:text-lg text-black'>
           
            <li className='flex justify-center items-center gap-1'>  
            <IoMdMail className=''/>
             info@realestate.in</li>
           
            <li className='flex  justify-center items-center gap-1 '>  
                <MdCall className=''/>
                1800-1234-567</li>
        </ul>
    </div>
    <div className='flex justify-between  items-center sm:m-8 m-2'>
        <span className='font-bold sm:text-xl text-sm'> I N T E N S E <span className='font-bold text-xs text-yellow-500 '>real-estate</span> </span>

        <GiHamburgerMenu className='text-2xl sm:hidden' onClick={() => setOpen(!open)} />

        <ul className='sm:flex-row text-md gap-11 font-semibold hidden sm:flex'>
            <li className='cursor-pointer'>HOME</li>
            <li className='cursor-pointer'>CATALOG</li>
            <li className='cursor-pointer'>SUBMIT-PROPERTY</li>
            <li className='cursor-pointer'>SERVICES</li>
            <li className='cursor-pointer'>ABOUT</li>
            <li className='cursor-pointer'>CONTACTS</li>
        </ul>

        <ul className={`${open ? "left-9" : "hidden"} absolute translate-x-0 bg-white grid gap-2 p-3 font-semibold z-2 drop-shadow-2xl rounded-md cursor-pointer`}>
            <li className='cursor-pointer'>HOME</li>
            <li className='cursor-pointer'>CATALOG</li>
            <li className='cursor-pointer'>SUBMIT-PROPERTY</li>
            <li className='cursor-pointer'>SERVICES</li>
            <li className='cursor-pointer'>ABOUT</li>
            <li className='cursor-pointer'>CONTACTS</li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar