import React from 'react'
import RecentProperties from './RecentProperties'

const tempArr = [
    {
        img: "https://images.pexels.com/photos/27988017/pexels-photo-27988017/free-photo-of-the-ornate-room-has-gold-and-blue-decor.jpeg?auto=compress&cs=tinysrgb&w=600",
        h1name: "Ava Nob Hill",
        h2: "$1199.00/mon",
        p1: "1200 sq ft",
        p2: "4 bedrooms",
        p3: "2 bathrooms",
        pf: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem eum iure vero tempore. Consectetur debitis voluptates doloribus minima numquam molestiae.",
    },
    {
        
        img: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
        h1name: "Ashton San Francisco",
        h2: "$1500.00/mon",
        p1: "1200 sq ft",
        p2: "3 bedrooms",
        p3: "2 bathrooms",
        pf: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem eum iure vero tempore. Consectetur debitis voluptates doloribus minima numquam molestiae.",
    },
    {
        
        img: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=600",
        h1name: "Alchemy by Alta",
        h2: "$1909.00/mon",
        p1: "1770 sq ft",
        p2: "5 bedrooms",
        p3: "2 bathrooms",
        pf: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem eum iure vero tempore. Consectetur debitis voluptates doloribus minima numquam molestiae.",
    },
    {
        img: "https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=600",
        h1name: "Ava Nob Hill",
        h2: "$1199.00/mon",
        p1: "1200 sq ft",
        p2: "4 bedrooms",
        p3: "2 bathrooms",
        pf: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem eum iure vero tempore. Consectetur debitis voluptates doloribus minima numquam molestiae.",
    },
    {
        
        img: "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600",
        h1name: "Ashton San Francisco",
        h2: "$1500.00/mon",
        p1: "1200 sq ft",
        p2: "3 bedrooms",
        p3: "2 bathrooms",
        pf: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem eum iure vero tempore. Consectetur debitis voluptates doloribus minima numquam molestiae.",
    },
    {
        
        img: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600",
        h1name: "Alchemy by Alta",
        h2: "$1909.00/mon",
        p1: "1770 sq ft",
        p2: "5 bedrooms",
        p3: "2 bathrooms",
        pf: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem eum iure vero tempore. Consectetur debitis voluptates doloribus minima numquam molestiae.",
    },
]

const RecentManage = () => {
  return (
    <>
    <div className=''>

    <div className='flex justify-center items-center text-2xl sm:text-4xl font-bold text-gray-700 my-17 '>
    <h2>Recent Properties</h2>
        </div>

        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center sm:items-center '>

    {
        tempArr.map(({img, h1name, h2, p1, p2, p3,pf}) => 
            
            <RecentProperties
            img={img}
            h1name={h1name}
            h2={h2}
            p1={p1}
            p2={p2}
            p3={p3}
            pf={pf}
            />
        )
    }

    </div>
    <div className='flex justify-center items-center text-sm sm:text-lg font-bold text-gray-700 my-8 sm:my-12'>

    <button className='bg-violet-400 p-4 rounded-sm cursor-pointer mb-8 uppercase text-amber-50'>View All Properties</button>
        </div>
    </div>
    </>
  )
}

export default RecentManage