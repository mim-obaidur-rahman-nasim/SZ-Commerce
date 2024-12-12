import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <h2>EasyMart.bd</h2>
            <p>Admin Panel</p>
        </div>
        <img src={navProfile} className="nav-profile" alt="" />
    </div>
  )
}

export default Navbar