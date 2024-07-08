import React, { useRef, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import NavbarLogo from "../../Assets/den black 1.png";
import Search from "../../Assets/Search.png";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const searchInputRef = useRef(null);
  let isSearchOpen = false;

  useEffect(() => {
    const searchBtn = document.getElementById("searchBtn");
    const navbar = document.getElementById("navbar");

    const searchInput = document.createElement("input");
    searchInput.classList.add("form-control", "search-input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search...");
    searchInputRef.current = searchInput;

    const handleSearchClick = (e) => {
      e.preventDefault();
      if (!isSearchOpen) {
        // Change to close icon
        searchBtn.innerHTML = '<i class="fas fa-times"></i>';
        isSearchOpen = true;
        // Show search input
        showSearchBox();
      } else {
        // Change back to search icon
        searchBtn.innerHTML = '<i class="fas fa-search"></i>';
        isSearchOpen = false;
        // Hide search input
        hideSearchBox();
      }
    };

    const showSearchBox = () => {
      navbar.appendChild(searchInput);
      searchInput.focus(); // Focus on the input field
    };

    const hideSearchBox = () => {
      if (navbar.contains(searchInput)) {
        navbar.removeChild(searchInput);
      }
    };

    searchBtn.addEventListener("click", handleSearchClick);

    return () => {
      searchBtn.removeEventListener("click", handleSearchClick);
    };
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-navbar");
  };

  return (
    <div className="navbar-container" id="navbar">
      <div className="logo-alignment">
        <button onClick={showNavbar} className="nav-button">
          <FaBars size={20} className="icon" />
        </button>
        <div className="navbar-logo">
          <img src={NavbarLogo} alt="" />
        </div>
      </div>
      <div ref={navRef} className="navbar-items-container">
        <a href="/" className="navbar-item">
          Internships
        </a>
        <a href="/" className="navbar-item">
          Offers
        </a>
        <a href="/" className="navbar-item">
          Courses
        </a>
        <a href="/" className="navbar-item">
          Contact
        </a>
        <button onClick={showNavbar} className="close-button">
          <FaTimes size={20} className="icon" />
        </button>
      </div>
      <div className="navbar-buttons">
        <a href="#" className="btn" id="searchBtn">
          <i className="fas fa-search"></i>
        </a>
        <a href="/" className="account-bn">
          Create Account
        </a>
        <a href="/" className="signup-bn">
          Sign Up
        </a>
        <a href="/" className="navbar-apply-bn">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
