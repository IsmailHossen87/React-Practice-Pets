import React from 'react'
import { useLoaderData } from 'react-router-dom'
import User from './User'

export default function Users() {
    const allData = useLoaderData()
  return (
    <div>

      <h1>Users Data : {allData.pets.length}</h1>

      <div className='grid md:grid-cols-3'>
        {
            allData.pets.map(data => <User data = {data}></User>)
        }
      </div>
    </div>
  )
}
