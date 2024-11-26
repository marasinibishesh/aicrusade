import React,{ useState, useEffect, useRef } from 'react'
import './Navigation.css'
const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state to toggle dropdown menu
    const menuRef = useRef(null); // Reference for the dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu
  };
  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener on component unmount
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  return (
    <div className="navbar"
    style={{
        position:'fixed',
        width: '85%', // Full width
        zIndex: '999', // Ensure it stays above other content
        marginLeft: '25px', // Center the navbar
        
    }}>
      <div className="navbar-left">
        {/* Hamburger menu icon for smaller screens */}
        {/* Added code */}
        <span className="hamburger-menu" onClick={toggleMenu}>
          ≡
        </span>
        <span className="back-arrow">
            <img src="https://firebasestorage.googleapis.com/v0/b/basaisaraiofficial.appspot.com/o/AICrusade%2FGroup%201%20(1).png?alt=media&token=23d0648c-80b2-4e14-9dfb-6a12965e624c" alt='AI'className="image"/></span>
        <span className="logo">AICrusade</span>
      </div>
      <div className="navbar-right">
        {/* Regular nav links (hidden for smaller screens) */}
        <a href="#about" className="nav-link">About   AICrusade</a>
        <a href="#challenge" className="nav-link">Challenge</a>
        <a href="#prizes" className="nav-link">Prize Pool</a>
        <a href="#ideas" className="nav-link">Track</a>
        <a href="#faqs" className="nav-link">FAQs</a>
      </div>

      {/* Dropdown menu (only visible when the hamburger menu is clicked) */}
      {/* Added code */}
      {isMenuOpen && (
        <div className="dropdown-menu" ref={menuRef}>
          <a href="#about" className="dropdown-link">About AICrusade</a>
          <a href="#challenge" className="dropdown-link">Challenge</a>
          <a href="#prizes" className="dropdown-link">Prize Pool</a>
          <a href="#ideas" className="dropdown-link">Track</a>
          <a href="#faqs" className="dropdown-link">FAQs</a>
        </div>
      )}
    </div>
  )
}

export default Navigation