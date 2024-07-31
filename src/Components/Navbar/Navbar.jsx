import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


export default function Navbar () {
  const activeLink = "text-purple";

    return (
      <div className="flex-col justify-center mx-1">

        <div className="flex mt-3 w-full justify-center"><Logo/></div>

        
        <div className="flex justify-between pb-4 font-sans text-3xl lg:text-5xl tracking-tighter text-black px-1 ">

        <NavLink to="/af/about" className={({ isActive }) => (isActive ? activeLink : "")}>about me</NavLink>
        <NavLink to="/af/portfolio" className={({ isActive }) => (isActive ? activeLink : "")}>portfolio</NavLink>
        <NavLink to="/af/contact" className={({ isActive }) => (isActive ? activeLink : "")}>contact</NavLink>
        </div>
        
        
        </div>
      
    )
  };
  
