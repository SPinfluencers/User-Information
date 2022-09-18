import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../Navbar/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div><NavLink to='/'>Home</NavLink></div>
        <div><NavLink to='/users'>Users</NavLink></div>
    </div>
  )
}

export default Navbar