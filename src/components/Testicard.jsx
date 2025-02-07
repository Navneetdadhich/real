import React from 'react'

const Testicard = () => {
  return (
    <div className='w-[20rem] flex px-3'>
        <img className='w-[5rem] h-[5rem] object-cover rounded-full' src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='ml-6'>
            <p className='text-xs italic mb-3'>Thank you for your prompt response and the help that you gave me. You always have a quick solution to any problem. What an excellent level of customer service!</p>
            <p className='text-sm font-bold '>-Lisa Evans</p>
        </div>
    </div>
  )
}

export default Testicard


