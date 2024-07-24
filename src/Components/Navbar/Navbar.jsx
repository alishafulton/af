import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


export default function Navbar () {
  const activeLink = "text-purple";

    return (
      <div>
        <div className="flex justify-center height:100%"><Logo/></div>

        
        <div className="flex justify-between pb-4 grow font-sans text-2xl tracking-tighter p-0.5 text-black">

        <NavLink to="/af/about" className={({ isActive }) => (isActive ? activeLink : "")}>about me</NavLink>
        <NavLink to="/af/portfolio" className={({ isActive }) => (isActive ? activeLink : "")}>portfolio</NavLink>
        <NavLink to="/af/contact" className={({ isActive }) => (isActive ? activeLink : "")}>contact</NavLink>
        </div>
        
        
        </div>
      
    )
  };
  
