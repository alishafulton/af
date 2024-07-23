import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Navbar () {
    return (
      <div className="justify-center bg-gray-900">
        <Logo/>

        <div class="min-h-screen grid place-content-start tan-color">
        <li><Link to="/af/"><h2>about me</h2></Link></li>
        <li><Link to="/af/portfolio"><h2>portfolio</h2></Link></li>
        <li><Link to="/af/contact"><h2>contact</h2></Link></li>
        </div>
        
        </div>
      
    )
  };
  
