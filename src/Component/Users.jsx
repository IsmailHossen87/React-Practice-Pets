import React from 'react'
import { useLoaderData } from 'react-router-dom'
import User from './User'

export default function Users() {
    const allData = useLoaderData()
  return (
    <div>

     <div className='text-center font-semibold bg-blue-400 rounded-md py-3 px-6 w-1/3 mx-auto mt-4 text-3xl'> <h1 >Users Data : {allData.pets.length}</h1></div>

      <div className='grid md:grid-cols-3 gap-4 mt-4'>
        {
            allData.pets.map(data => <User data = {data}></User>)
        }
      </div>
    </div>
  )
}
