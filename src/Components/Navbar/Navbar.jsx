import React from "react";
import './Navbar.css';
import logo from '../../assets/name.png';

export default function Navbar () {
    return (
      <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>Portfolio</li>
            <li>About Me</li>
        </ul>
        <div className="nav-connect">Contact Me</div>
      </div>
    )
  };
  
