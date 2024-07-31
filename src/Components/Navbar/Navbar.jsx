import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


export default function Navbar () {
  const activeLink = "text-purple";

    return (
      <div className="grid grid-cols-1 lg:grid-cols-5 mx-1">

        <div className="w-full justify-center lg:col-span-3 lg:col-start-2 mb-1"><Logo/></div>

        
        <div className="lg:col-span-3 lg:col-start-2 my-1 lg:my-2 ">
          <div className="grid grid-cols-3 font-sans text-3xl lg:text-5xl tracking-tighter text-black">

        <div className="justify-self-start"><NavLink to="/af/about" className={({ isActive }) => (isActive ? activeLink : "")}>about me</NavLink></div>
        <div className="justify-self-center"><NavLink to="/af/portfolio" className={({ isActive }) => (isActive ? activeLink : "")}>portfolio</NavLink></div>
        <div className="justify-self-end"><NavLink to="/af/contact" className={({ isActive }) => (isActive ? activeLink : "")}>contact</NavLink></div>
        </div>
        
        
        </div></div>
      
    )
  };
  
