import React from 'react'
import { Link } from 'react-router-dom'

export default function User({data}) {
    const {image,category,breed,petId}= data
  return (
    <div >
      <div className="card shadow-xl">
  <figure className='h-56 w-fit object-cover'>
    <img 
      src={image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p>{breed?breed:'N/A'}</p>
    <div className="card-actions justify-end">
     
      <Link to={`/user/${petId}`}> <button className="btn btn-primary">Show Details</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}
