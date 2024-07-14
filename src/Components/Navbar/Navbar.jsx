import React from "react";
import './Navbar.css';
import logo from '../../assets/name.png';

export default function Navbar () {
    return (
      <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><h2>Portfolio</li></h2>
            <li><h2>About Me</li></h2>
        </ul>
        <div className="nav-connect">Contact Me</div>
      </div>
    )
  };
  
