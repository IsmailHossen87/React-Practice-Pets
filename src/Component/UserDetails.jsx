import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function UserDetails() {
    const data = useLoaderData()
   const {category,pet_details,image} = data.petData
     return (
        <div className="card bg-base-100 w-96 shadow-xl mt-6 mx-auto">
        <figure>
          <img
            src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{pet_details}</h2>
          
        </div>
      </div>
  )
}
