import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

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
  <div className="justify-items-center flex-col w-full ">
   <div className="w-full justify-center lg:col-span-3 lg:col-start-2 mb-1"><Logo/></div>


   <div className="w-full max-w-5xl justify-center lg:col-span-3 lg:col-start-2 my-1 lg:my-2 ">
    <div className="grid grid-cols-3 font-sans text-3xl md:text-4xl xl:text-5xl tracking-tighter text-black">
        <div className="justify-self-start"><NavLink to="/af/about" className={({ isActive }) => (isActive ? activeLink : "")}>about me</NavLink></div>
        <div className="justify-self-center"><NavLink to="/af/portfolio" className={({ isActive }) => (isActive ? activeLink : "")}>portfolio</NavLink></div>
        <div className="justify-self-end"><NavLink to="/af/contact" className={({ isActive }) => (isActive ? activeLink : "")}>contact</NavLink></div>
    </div>
    </div>
        
        
 </div>
      
    )
  };
  
