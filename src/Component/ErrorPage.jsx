import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
  return (
    <div className='w-1/3 mx-auto border-2 border-red-500 p-7 gap-3 mt-5 rounded-lg flex flex-col'>
      <h2 className='text-center font-serif font-semibold'>Oops!!</h2>
      <p>{error.statusTest || error.message}</p>
     <div className='text-center'>
     {
        error.status === 404 && <div>
            <h3>Page Not Found</h3>
            <Link to={`/`}><button className="btn mt-3 btn-primary">About Details</button></Link>
        </div>
      }
     </div>
    </div>
  )
}
