import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Navbar () {
    return (
      <div className='navbar'>
        <Logo/>

        <ul className="nav-menu">
        <li><Link to="/af/"><h2>about me</h2></Link></li>
        <li><Link to="/af/portfolio"><h2>portfolio</h2></Link></li>
        </ul>

        <div className="nav-connect"><Link to="/af/contact">contact</Link></div>
        
        </div>
      
    )
  };
  
