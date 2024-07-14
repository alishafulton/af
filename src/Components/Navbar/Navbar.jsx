import React from "react";
import './Navbar.css'

export default function Navbar () {
    return (
      <div className='navbar'>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Portfolio</li>
            <li>About Me</li>
        </ul>
        <div className="nav-connect">Connect with me!</div>
      </div>
    )
  };
  