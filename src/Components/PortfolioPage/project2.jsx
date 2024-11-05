import React from "react";
import Mockup2 from "./mock2";
import UxTag from "./uxtag";



export default function Project2() {
    
      return (
<div >
        <div className="w-40 md:w-56 justify-self-center border border-gray-200">
          <div className="w-28 md:w-40 mx-6">
            <Mockup2/>
          </div>
          </div>
          

          <div className="h-min w-full grid grid-cols-2 items-center"> 
              <div className="leading-10 text-black text-lg justify-self-start">Channel</div>
              <div className="justify-self-end"><UxTag/></div>
          </div>
</div>

      );
    }