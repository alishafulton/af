import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Navbar () {
    return (
      <div className="flex justify-center">
        <div><Logo/></div>

        <div class="min-h-screen flex place-content-start tan-color font-serif">
        <div className="text-lg"><Link to="/af/"><h2>about me</h2></Link></div>
        <li><Link to="/af/portfolio"><h2>portfolio</h2></Link></li>
        <li><Link to="/af/contact"><h2>contact</h2></Link></li>
        </div>
        
        </div>
      
    )
  };
  
