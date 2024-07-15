import React from "react";
import './Navbar.css';
import logo from '../../src/assets/name.png';
import { Link, Outlet } from "react-router-dom";

export default function Navbar () {
    return (
      <div className='navbar'>

        <Link to="/af/">Home</Link>
        {" | "}
        <Link to="/af/portfolio">portfolio</Link>

      <Outlet />

      </div>
    )
  };
  
