import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function SingleAbout({data}) {
    const navigate= useNavigate()



    const showDetails =()=>{
        navigate(`/Users`)
        // navigate(-1)         1 step back
    }


    const {body,id,title} = data
  return (
    <div className='border-green-500 border p-4 rounded-md mt-4 mx-2 md:mx-0'>
      <h3 className='text-2xl font-semibold'>User Id : {id}</h3>
      <h2 className='text-red-400'>Title : {title}</h2>
      <h2 className='bg-yellow-100 py-2 px-3 mt-2'>{body}</h2>
      <div className="card-actions justify-start mt-3">
      <NavLink to={`/postShow/${id}`}><button className="btn btn-primary">About Details</button></NavLink>
      <div className=''><button onClick={showDetails} className='btn btn-secondary'>User</button></div>
      </div>
     
    </div>
  )
}
