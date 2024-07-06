import React from 'react'
import NavbarLogo from '../../Assets/den black 1.png' 
import Search from '../../Assets/Search.png' 
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar-logo">
        <img src={NavbarLogo} alt=''/>
      </div>
      <div className="navbar-items-container">
        <a href="/" className="navbar-item">Internships</a>
        <a href="/" className="navbar-item">Offers</a>
        <a href="/" className="navbar-item">Courses</a>
        <a href="/" className="navbar-item">Contact</a>
      </div>
      <div className="navbar-buttons">
        <img src={Search}  className='navbar-logo-search' alt="" />
        <a href='/' className="account-bn">Create Account</a>
        <a href='/' className="signup-bn">Sign Up</a>
      </div>
    </div>
  )
}

export default Navbar