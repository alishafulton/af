import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Dropdown from "../Dropdown/Dropdown";

export default function Navbar () {

    return (
      <>
        <div className="flex justify-center"><Logo/></div>
        <div className="flex justify-center"><Dropdown/></div>

        
        </>
      
    )
  };
  
