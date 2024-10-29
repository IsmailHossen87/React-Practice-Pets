import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function Errors() {
    const error = useRouteError()
    console.log(error)
  return (
    <div className='border w-1/3 mx-auto bg-red-300'>
      <h1>Oops!!!!</h1>
      <p>{error.statusText || error.message}</p>
      {
        error.status === 404 && 
        <div><p>Page Not Found</p>
        <Link to={`/`}><button>Home</button></Link>
        </div>
        
      }
    </div>
  )
}
