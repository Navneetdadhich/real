import React from 'react'
import AgentCard from './AgentCard'

const tempArr = [
    {
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Ashley Mason",
        number: "1-800-4564-23423",
        email: "ashley@lookatme.org"
       }, 
       {
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "John Doe",
        number: "1-800-9876-54321",
        email: "john@example.com"
       }, 
       {
        img: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Emily Clark",
        number: "1-800-2222-3333",
        email: "emily@randommail.com"
       }, 
       {
        img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Michael Brown",
        number: "1-800-5555-7777",
        email: "michael@domain.net"
       }, 
]

const RealestateAgents = () => {
  return (
    <div className='flex flex-col justify-center items-center text-2xl sm:text-4xl font-bold text-gray-700 my-17 '>
        <h2>Real Estate Agents</h2>

        <div className='flex sm:flex-row  flex-col gap-10 my-14'>

            {
                tempArr.map(({img, name, number, email}) => <AgentCard img={img} name={name} number={number} email={email}/>)
            }
            
            {/* <AgentCard/> */}
        </div>

        <div className='flex justify-center items-center text-sm sm:text-lg font-bold text-gray-700 my-4 sm:my-10'>

    <button className='bg-violet-400 text-amber-50 p-4 rounded-sm cursor-pointer mb-2 uppercase'>View All Agents</button>
        </div>
    </div>
  )
}

export default RealestateAgents