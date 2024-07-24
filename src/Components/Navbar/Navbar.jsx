import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";


export default function Navbar () {
  
    return (
      <div>
        <div className="flex justify-center"><Logo/></div>

        
        <div className="flex justify-between">
        <div className="grow font-sans text-lg tracking-tighter"><Link to="/af/">about me</Link></div>
        <div className="grow font-sans text-lg tracking-tighter"><Link to="/af/portfolio">portfolio</Link></div>
        <div className="grow font-sans text-lg tracking-tighter"><Link to="/af/contact">contact</Link></div>
        </div>
        
        
        </div>
      
    )
  };
  
