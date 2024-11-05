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
        
            <div className="grid grid-cols-2 align-middle h-min"> 
              <div className="leading-10 text-black text-lg justify-self-start">Coast</div>
              <div className="justify-self-end"><UxTag/></div>
          </div>
</div>

      );
    }