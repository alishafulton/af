import React from "react";
import Mockup from "./mock1";
import UxTag from "./uxtag";



export default function Project1() {
    
      return (
<div>
            <div className="w-56 justify-self-center border border-gray-200">
              <div className="w-44 mx-6">
                 <Mockup/>
              </div>
            </div>
        
            <div className="flex flex-row align-middle text-lg leading-10 text-black ">Coast
          <UxTag/>
          </div>
</div>

      );
    }