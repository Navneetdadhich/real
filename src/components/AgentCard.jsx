import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const AgentCard = ({img, name, number, email}) => {
  return (
    <div className='flex flex-col gap-1'>  
        <img className="w-[15rem] h-[15rem] object-cover" src={img} alt="" />
        <h1 className='text-xl sm:text-2xl text-violet-500 font-bold'>{name}</h1>
        <div className='flex gap-1 text-xs sm:text-sm items-center'>
            <IoCall/>
            <p>{number}</p>
        </div>
        <div className='flex gap-1 text-xs sm:text-sm items-center'>
            <MdEmail/>
            {email}
        </div>
    </div>
  )
}

export default AgentCard