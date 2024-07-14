import React from "react";
import './Navbar.css'
import name from '../../assets/alisha fulton.png'

export default function Navbar () {
    return (
      <div className='navbar'>
        <img src={name} alt="alisha fulton" />
        <ul className="nav-menu">
            <li>Hello is anybody out there</li>
        </ul>
        <div className="nav-connect">pls</div>
      </div>
    )
  };
  
