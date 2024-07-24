import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import portfolio from "../../assets/portfolio.png"
import about from "../../assets/aboutme.png"
import contact from "../../assets/contact.png"

export default function Navbar () {
  
    return (
      <div>
        <div className="flex justify-center "><Logo/></div>

        
        <div className="flex flex-row justify-center gap-4">
        <div className="flex-auto"><Link to="/af/"><img src={about}/></Link></div>
        <Link to="/af/portfolio"><img src={portfolio}/></Link>
        <Link to="/af/contact"><img src={contact}/></Link></div>
        
        
        </div>
      
    )
  };
  
