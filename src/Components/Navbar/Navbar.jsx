import React from "react";
import './Navbar.css';
import logo from '../../assets/name.png';

export default function Navbar () {
    return (
      <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><h2>portfolio</h2></li>
            <li><h2>about me</h2></li>
        </ul>
        <div className="nav-connect"><h3>Contact Me</h3></div>
      </div>
    )
  };
  
