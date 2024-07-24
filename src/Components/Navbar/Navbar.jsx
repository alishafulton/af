import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


export default function Navbar () {
  
    return (
      <div>
        <div className="flex justify-center"><Logo/></div>

        
        <div className="flex justify-between pb-2">
        <div className="grow font-sans text-2xl tracking-tighter p-0.5 text-black active:text-blue"><NavLink to="/af/">about me</NavLink></div>
        <div className="grow font-sans text-2xl tracking-tighter p-0.5 text-blue"><NavLink to="/af/portfolio">portfolio</NavLink></div>
        <div className="grow font-sans text-2xl tracking-tighter p-0.5"><Link to="/af/contact">contact</NavLink></div>
        </div>
        
        
        </div>
      
    )
  };
  
