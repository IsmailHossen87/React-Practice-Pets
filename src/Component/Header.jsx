import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <nav className='bg-yellow-400 py-2 px-4 md:flex justify-around'>
      
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/About`}>About</NavLink>
        <NavLink to={`/Users`}>Users</NavLink>


    </nav>
  )
}
