import React from "react";
import starbucks1 from "./../../assets/starbucks1.png";
import starbucks2 from "./../../assets/starbucks2.png";
import starbucks3 from "./../../assets/starbucks3.png";
import starbucks4 from "./../../assets/starbucks4.png";


export default function Compliments() {
    
      return (
        <div className = "flex flex-row justify-center space-x-2">
            <img src={ starbucks1 } alt="" className="w-28" />
            <img src={ starbucks2 } alt="" className="w-28" />
            <img src={ starbucks3 } alt="" className="w-28" />
            <img src={ starbucks4 } alt="" className="w-28" />
        </div>
      );
    }