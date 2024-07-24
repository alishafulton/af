import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


export default function Navbar () {
  const activeLink = "text-blue underline";
    return (
      <div>
        <div className="flex justify-center"><Logo/></div>

        
        <div className="flex justify-between pb-2 grow font-sans text-2xl tracking-tighter p-0.5 text-black">

        <div><NavLink 
          to="/af/" 
          className={({ isActive }) => (isActive ? activeLink : "")}>about me</NavLink></div>

        <div><NavLink to="/af/portfolio" className={({ isActive }) => (isActive ? activeLink : "")}>portfolio</NavLink></div>
        <div><NavLink to="/af/contact" className={({ isActive }) => (isActive ? activeLink : "")}>contact</NavLink></div>
        </div>
        
        
        </div>
      
    )
  };
  
