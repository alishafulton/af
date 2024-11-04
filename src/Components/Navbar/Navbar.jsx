import React from "react";
import { NavLink } from "react-router-dom";


// my navbar! 
// only constant is to make the active link green

export default function Navbar () {
  const activeLink = "text-green ";



return (
      
      <div className="w-full justify-center">
        <div className="flex flex-row font-mono text-xs tracking-tighter text-black">
          <div className="py-2 px-4 "><NavLink to="/" className={({ isActive }) => (isActive ? activeLink : "")}>PORTFOLIO</NavLink></div>
          <div className="py-2 px-4 "><NavLink to="/contact/" className={({ isActive }) => (isActive ? activeLink : "")}>CONTACT</NavLink></div>
        </div>
    </div>
        
      
    )
  };
  
