import React from "react";
import Mockup from "./mock1";
import UxTag from "./uxtag";



export default function Project1() {
    
      return (
<div>
            <div className="w-42 md:w-56 justify-self-center border border-gray-200 group">
              <div className="w-30 md:w-42 mx-6 group-hover:blur-lg transition-all duration-200 ease-out">
                 <Mockup className=" group-hover:blur-lg transition-all duration-200 ease-out"/>
              </div>
            </div>
        
            <div className="h-min w-full grid grid-cols-2 items-center"> 
              <div className="leading-10 text-black text-lg justify-self-start">Coast</div>
              <div className="justify-self-end"><UxTag/></div>
          </div>
</div>

      );
    }