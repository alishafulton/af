import React from "react";
import './Navbar.css';
import logo from '../../src/assets/name.png';
import { Link, Outlet } from "react-router-dom";

export default function Navbar () {
    return (
      <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><h2><Link to="/af/">Home</Link>link></h2></li>
            <li><h2><Link to="/af/portfolio">portfolio</h2></li>
        </ul>
        <div className="nav-connect"><h3>contact</h3></div>
      </div>
    )
  };
  
