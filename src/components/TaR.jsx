import React from 'react'
import IconCard from './IconCard'

const TaR = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/6495710/pexels-photo-6495710.jpeg?auto=compress&cs=tinysrgb&w=600')] w-full sm:h-[75vh] flex flex-col bg-no-repeat bg-cover text-center text-white">

        <h2 className='sm:my-16 my-4 sm:left-110 left-12 text-white font-bold text-lg sm:text-4xl'>Real Estate Tools and Resources</h2>
        <div className='flex sm:flex-row flex-col justify-center items-center sm:gap-20 gap-10 p-4'>

            <IconCard/>
            <IconCard/>
            <IconCard/>
            </div>
    </div>
  )
}

export default TaR