import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleAbout from './SingleAbout'

export default function About() {
  const data = useLoaderData()
  return (
    <div>
      <h1 className='text-center font-semibold bg-yellow-200 rounded-md py-3 px-6 md:w-1/3 mx-auto mt-4 text-3xl'>About section</h1>
      <div className='grid md:grid-cols-3 gap-4 '>
        {
          data.map(data=> <SingleAbout data = {data}></SingleAbout>)
        }
      </div>
    </div>
  )
}
