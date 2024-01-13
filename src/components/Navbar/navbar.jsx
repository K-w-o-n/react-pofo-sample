import React from 'react';
import './navbar.css'
import logo from '../../assets/images (1).png'
import envelop from '../../assets/envelop.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link className="desktopMenuItemList active">Home</Link>
            <Link className="desktopMenuItemList">About</Link>
            <Link className="desktopMenuItemList">Projects</Link>
            <Link className="desktopMenuItemList">Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={envelop} alt="" className="desktopMenuImg" />
            Contact Me
        </button>
      </nav>
    </div>
  )
}

export default Navbar;
