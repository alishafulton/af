import React from "react";
import { NavLink } from "react-router-dom";


// my navbar! 
// only constant is to make the active link purple

export default function Navbar () {
  const activeLink = "text-purple";


// this was my first ever experience working with a grid in code
// i think i might adapt most of my layout to grids it just works so well

// so one column in mobile, obviously, and 5 when we get to large
// logo is centered always and spans 3 columns when we move to five

// then all three of my links, with if else statements to change to active color

return (
  <div className="flex flex-col justify-center items-center">
      
      <div className="w-full max-w-3xl">
        <div className="flex font-mono text-xl text-black">
          <div className="justify-self-start"><NavLink to="/" className={({ isActive }) => (isActive ? activeLink : "")}>portfolio</NavLink></div>
          <div className="justify-self-end"><NavLink to="/contact/" className={({ isActive }) => (isActive ? activeLink : "")}>contact</NavLink></div>
        </div>
    </div>
        
        
 </div>
      
    )
  };
  
