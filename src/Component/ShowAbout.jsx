import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ShowAbout() {
    const data = useLoaderData()
    const {body,id} = data
    console.log(data)
  return (
    <div className='border-2 border-red-400 w-1/3 mx-auto p-5 mt-3 '>
      <h3 className='text-center text-red-400 font-bold text-3xl '>Body</h3>
      <p className='border p-2 bg-green-300 w-1/3 rounded-md'> Id : {id}</p>
      <p>{body}</p>
    </div>
  )
}
