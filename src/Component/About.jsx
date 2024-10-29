import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleAbout from './SingleAbout'

export default function About() {
  const data = useLoaderData()
  return (
    <div>
      <h1 className='text-3xl text-center bg-yellow-200 py-4 w-1/3 mx-auto'>About section</h1>
      <div className='grid md:grid-cols-3 gap-4 '>
        {
          data.map(data=> <SingleAbout data = {data}></SingleAbout>)
        }
      </div>
    </div>
  )
}
