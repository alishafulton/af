import React from "react";
import { NavLink } from "react-router-dom";


// my navbar! 
// only constant is to make the active link green

export default function Navbar () {
  const activeLink = "text-green";



return (
  <div className="flex flex-col justify-center items-center">
      
      <div className="w-full max-w-3xl">
        <div className="font-mono text-xl text-black">
          <div className="justify-self-start"><NavLink to="/" className={({ isActive }) => (isActive ? activeLink : "")}>portfolio</NavLink></div>
          <div className="justify-self-end"><NavLink to="/contact/" className={({ isActive }) => (isActive ? activeLink : "")}>contact</NavLink></div>
        </div>
    </div>
        
        
 </div>
      
    )
  };
  
