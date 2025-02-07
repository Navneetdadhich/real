import React from 'react'

const CategoryItem = ({title, ti2, img}) => {
  return (
    <div className='relative'>
        <div className='flex text-center h-full w-full'>

        <h2 className='absolute top-10 left-18 text-white z-3 text-xl right-18 '>{title}</h2>
        <h3 className='absolute top-15 left-20 right-19 text-white z-1 text-sm mt-1'>{ti2}</h3>
        </div>
        <img src={img} alt="Categories" className='brightness-40 w-[21rem] h-[12rem] object-cover rounded-sm'/>
    </div>
  )
}

export default CategoryItem