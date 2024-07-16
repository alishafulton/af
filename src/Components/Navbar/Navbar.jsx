import React from "react";
import './Navbar.css';
import logo from '../../assets/name.png'
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
      <div className='navbar'>
        <img src={ logo } alt="" className="logo"/>

        <ul className="nav-menu">
        <li><Link to="/af/"><h2>home</h2></Link></li>
        <li><Link to="/af/about"><h2>about me</h2>></Link></li>
        <li><Link to="/af/portfolio"><h2>portfolio</h2></Link></li>
        </ul>

        <div className="nav-connect">contact</div>
        
        </div>
      
    )
  };
  
