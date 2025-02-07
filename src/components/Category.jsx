import React from 'react'
import CategoryItem from './CategoryItem'

const propArray = [
    {
        title: "With pools",
        ti2: "32 properties",
        img: "https://images.pexels.com/photos/9400917/pexels-photo-9400917.jpeg?auto=compress&cs=tinysrgb&w=600"
     },
    {
        title: "Cozy Homes",
        ti2: "45 properties",
        img: "https://images.pexels.com/photos/3432326/pexels-photo-3432326.jpeg?auto=compress&cs=tinysrgb&w=600"
     },
    {
        title: "Studio Apartments",
        ti2: "12 properties",
        img: "https://images.pexels.com/photos/7031723/pexels-photo-7031723.jpeg?auto=compress&cs=tinysrgb&w=600"
     },
    {
        title: "Luxury Houses",
        ti2: "76 properties",
        img: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600"
     },
]

const Category = () => {
  return (
    <>
    <div className='flex flex-col gap-4 sm:flex-row p-4 my-4 justify-between items-center'>

    {
        propArray.map(({title, ti2, img}) => <CategoryItem 
        title={title}
        ti2={ti2}
        img={img}
        />)
    }

    </div>
    </>
  )
}

export default Category