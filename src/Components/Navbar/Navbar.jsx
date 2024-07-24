import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";


export default function Navbar () {
  
    return (
      <div>
        <div className="flex justify-center"><Logo/></div>

        
        <div className="flex flex-row justify-between">
        <div className="flex-auto w-1/4 font-sans text-lg tracking-tighter"><Link to="/af/">about me</Link></div>
        <div className="flex-auto w-1/4 font-sans text-lg tracking-tighter"><Link to="/af/portfolio">portfolio</Link></div>
        <div className="flex-auto w-1/4 font-sans text-lg tracking-tighter"><Link to="/af/contact">contact</Link></div>
        </div>
        
        
        </div>
      
    )
  };
  
