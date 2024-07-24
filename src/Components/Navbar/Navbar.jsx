import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";


export default function Navbar () {
  
    return (
      <div>
        <div className="flex justify-center"><Logo/></div>

        
        <div className="flex justify-between pb-1">
        <div className="grow font-sans text-2xl tracking-tighter p-0.5 text-gray-300 active:text-blue-500"><Link to="/af/">about me</Link></div>
        <div className="grow font-sans text-2xl tracking-tighter p-0.5"><Link to="/af/portfolio">portfolio</Link></div>
        <div className="grow font-sans text-2xl tracking-tighter p-0.5"><Link to="/af/contact">contact</Link></div>
        </div>
        
        
        </div>
      
    )
  };
  
