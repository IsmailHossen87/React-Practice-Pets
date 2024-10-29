import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-yellow-400 py-2 px-4 flex justify-around'>
      <Link className='bg-black px-4 py-1 text-white rounded-md hover:bg-blue-500' to='/'>Home</Link>
      <Link className='bg-black px-4 py-1 text-white rounded-md hover:bg-blue-500' to='/About'>About</Link>
      <Link className='bg-black px-4 py-1 text-white rounded-md hover:bg-blue-500' to='/Users'>Users</Link>
    </div>
  )
}
