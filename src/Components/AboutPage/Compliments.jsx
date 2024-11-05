import React from "react";
import starbucks1 from "./../../assets/starbucks1.png";
import starbucks2 from "./../../assets/starbucks2.png";


export default function Compliments() {
    
      return (
        <div className = "flex flex-row space-x-2">
            <img src={ starbucks1 } alt="" />
            <img src={ starbucks2 } alt="" />
        </div>
      );
    }