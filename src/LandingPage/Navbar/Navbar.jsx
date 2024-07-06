import React from 'react'
import { useRef } from 'react';
import { FaTimes, FaBars } from "react-icons/fa";
import NavbarLogo from '../../Assets/den black 1.png' 
import Search from '../../Assets/Search.png' 
import './Navbar.css'

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-navbar');
  }
  return (
    <div className='navbar-container'>
      <div className="logo-alignment">
      <button onClick={showNavbar} className='nav-button'><FaBars size={20} className='icon'/></button>
      <div className="navbar-logo">
        <img src={NavbarLogo} alt=''/>
      </div>
      </div>
      <div ref={navRef} className="navbar-items-container">
        <a href="/" className="navbar-item">Internships</a>
        <a href="/" className="navbar-item">Offers</a>
        <a href="/" className="navbar-item">Courses</a>
        <a href="/" className="navbar-item">Contact</a>
        <button onClick={showNavbar} className='close-button'><FaTimes className='icon'/></button>
      </div>
      <div className="navbar-buttons">
        <img src={Search}  className='navbar-logo-search' alt="" />
        <a href='/' className="account-bn">Create Account</a>
        <a href='/' className="signup-bn">Sign Up</a>
        <a href='/' className="navbar-apply-bn">Apply Now</a>
      </div>
    </div>
  )
}

export default Navbar