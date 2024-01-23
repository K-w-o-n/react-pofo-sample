import React from 'react';
import './navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className='nav1'>Kwon</h1>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList active">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItemList">Projects</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuItemList">Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behaviour: 'smooth'})
        }}>
            Contact Me
        </button>
      </nav>
    </div>
  )
}

export default Navbar;
