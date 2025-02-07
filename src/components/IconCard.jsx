import React from 'react'
import { BsChatLeftText } from "react-icons/bs";


const IconCard = () => {
  return (
    <>

        
            <div className='w-[18rem] sm:h-[20rem] flex flex-col  items-center sm:gap-4 gap-2'>
                <div className="bg-orange-400 sm:w-[5rem] sm:h-[5rem] w-[2rem] h-[2rem] rounded-full flex items-center justify-center sm:text-3xl text-md">
                 <BsChatLeftText />
                </div>
                <h2 className='font-bold sm:text-2xl'>More Listings</h2>
                <p className='sm:text-lg text-xs'>Check up to 40% more houses for sale. See picture of you new life at a new place. See map, markets, etc.</p>
            </div>
      
    </>
   
  )
}

export default IconCard