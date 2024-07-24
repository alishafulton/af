import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Dropdown from "../Dropdown/Dropdown";

export default function Navbar () {

    return (
      <div className="flex justify-center">
        <div><Logo/></div>
        <Dropdown/>

        
        </div>
      
    )
  };
  
