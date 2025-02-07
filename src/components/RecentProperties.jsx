import React from 'react'


const RecentProperties = ({img,h1name,h2,p1,p2,p3,pf}) => {
  return (
    
        <div className=' sm:w-[24rem] flex flex-col justify-between items-between sm:mb-7 p-4'>
            <img src={img} alt="" className='h-[15rem] sm:w-[22em] sm:h-[15rem] object-cover rounded-sm mb-2'/>

            <div className='w-[20rem] flex flex-col gap-2'>
                <h1 className='text-lg text-orange-400 font-semibold'>{h1name}</h1>
                <h2 className='text-md font-bold text-gray-700'>{h2}</h2>
                <div className='flex gap-2 text-sm text-gray-400'>
                    <p>{p1}</p>
                    <p>.</p>
                    <p>{p2}</p>
                    <p>.</p>
                    <p>{p3}</p>
                </div>
                    <p className='text-xs sm:text-sm '>{pf}
                    </p>
            </div>
        </div>
  
  )
}

export default RecentProperties;