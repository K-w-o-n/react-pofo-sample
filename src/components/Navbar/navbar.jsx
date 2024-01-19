import React from 'react';
import './navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className='nav1'>Kwon</h1>
        <div className="desktopMenu">
            <Link className="desktopMenuItemList active">Home</Link>
            <Link className="desktopMenuItemList">About</Link>
            <Link className="desktopMenuItemList">Projects</Link>
            <Link className="desktopMenuItemList">Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            Contact Me
        </button>
      </nav>
    </div>
  )
}

export default Navbar;
