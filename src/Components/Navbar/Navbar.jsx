import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import portfolio from "../../assets/portfolio.png"
import about from "../../assets/aboutme.png"
import contact from "../../assets/contact.png"

export default function Navbar () {
  
    return (
      <div className="flex justify-center">
        <div><Logo/></div><br/>

        
        <div className="text-lg"><Link to="/af/"><img src={about}/></Link></div>
        <div className="text-lg"><Link to="/af/portfolio"><img src={portfolio}/></Link></div>
        <div className="text-lg"><Link to="/af/contact"><img src={contact}/></Link></div>
        
        
        </div>
      
    )
  };
  
