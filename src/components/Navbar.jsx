import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-10 font-bold text-lg shadow-md py-3 text-white' style={{backgroundColor: "#5C5470"}}>
        <Link to="/" >Home</Link>

        <Link to="/createblog" >Create Blog</Link>
    </div>
  )
}

export default Navbar