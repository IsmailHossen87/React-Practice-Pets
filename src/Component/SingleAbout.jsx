import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleAbout({data}) {
    const {body,id,title} = data
  return (
    <div className='border-green-500 border p-4 rounded-md mt-4'>
      <h3 className='text-2xl font-semibold'>User Id : {id}</h3>
      <h2 className='text-red-400'>Title : {title}</h2>
      <h2 className='bg-yellow-100 py-2 px-3 mt-2'>{body}</h2>
      <div className="card-actions justify-start mt-3">
      <Link to={`/postShow/${id}`}><button className="btn btn-primary">About Details</button></Link>
      </div>
     
    </div>
  )
}
