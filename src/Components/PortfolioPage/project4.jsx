import React from "react";
import Mockup4 from "./mock4";
import RedesignTag from "./redesigntag";



export default function Project3() {
    
      return (
<div>
        <div className="w-42 md:w-56 justify-self-center border border-gray-200">
          <div className="w-30 md:w-42 mx-6">
            <Mockup4/>
          </div>
          </div>
          
          <div className="h-min w-full grid grid-cols-2 items-center"> 
              <div className="leading-10 text-black text-lg justify-self-start">La La Land</div>
              <div className="justify-self-end"><RedesignTag/></div>
          </div>
</div>

      );
    }