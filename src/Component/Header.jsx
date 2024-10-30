import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [open,setOpen] = useState(false);
  return (
    <nav className='p-6 bg-yellow-200'>
      <div onClick={()=>setOpen(!open)} className='text-2xl md:hidden '>
          {
            open === true?<AiOutlineClose />:<AiOutlineAlignLeft></AiOutlineAlignLeft>
          }
      </div>
     

         <section className={`${open?'top-12  rounded-md':'-top-20'}  py-2 px-4 flex flex-col md:flex-row z-[99] gap-4 bg-gray-400 md:bg-transparent absolute md:static justify-around }`}>  
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/About`}>About</NavLink>
        <NavLink to={`/Users`}>Users</NavLink>
        </section>
    </nav>




   
  )
}
{/* <nav className='bg-yellow-400 py-2 px-4 md:flex justify-around'>  
<NavLink to={`/`}>Home</NavLink>
<NavLink to={`/About`}>About</NavLink>
<NavLink to={`/Users`}>Users</NavLink>
</nav> */}