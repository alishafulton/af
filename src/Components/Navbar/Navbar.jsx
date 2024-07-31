import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


export default function Navbar () {
  const activeLink = "text-purple";

    return (
      <div className="grid grid-cols-1 lg:grid-cols-5">

        <div className="w-full  lg:col-span-3 lg:col-start-2"><Logo/></div>

        
        <div className="lg:col-span-3 lg:col-start-2">
          <div className="grid grid-cols-3 justify-items-center font-sans text-3xl lg:text-5xl tracking-tighter text-black">

        <NavLink to="/af/about" className={({ isActive }) => (isActive ? activeLink : "")}>about me</NavLink>
        <NavLink to="/af/portfolio" className={({ isActive }) => (isActive ? activeLink : "")}>portfolio</NavLink>
        <NavLink to="/af/contact" className={({ isActive }) => (isActive ? activeLink : "")}>contact</NavLink>
        </div>
        
        
        </div></div>
      
    )
  };
  
