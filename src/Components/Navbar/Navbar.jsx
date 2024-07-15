import React from "react";
import './Navbar.css';
import logo from '../../assets/name.png'
import { Link, Outlet } from "react-router-dom";

export default function Navbar () {
    return (
      <div className='navbar'>
        <img src="{logo}" alt="" className="logo"/>

        <Link to="/af/"><h2>Home</h2></Link>
        {" | "}
        <Link to="/af/portfolio"><h2>portfolio</h2></Link>

      <Outlet />

      </div>
    )
  };
  
