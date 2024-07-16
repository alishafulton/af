import React from "react";
import './Navbar.css';
import logo from '../../assets/name.png'
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
      <div className='navbar'>
        <img src={ logo } alt="" className="logo"/>

        <ul className="nav-menu">
        <li><Link to="/af/">home</Link></li>
        <li><Link to="/af/about">about me</Link></li>
        <li><Link to="/af/portfolio">portfolio</Link></li>
        </ul>

        <div className="nav-connect">contact</div>
        
        </div>
      
    )
  };
  
