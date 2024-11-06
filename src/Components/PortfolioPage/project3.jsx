import React from "react";
import Mockup3 from "./mock3";
import UxTag from "./uxtag";



export default function Project3() {
    
      return (
<div>
        <div className="w-42 md:w-56 justify-self-center border border-gray-200 group-hover:bg-pink group-hover:bg-opacity-10 group-hover:border-pink transition-all ease-in-out duration-300">
          <div className="w-30 md:w-42 mx-6">
            <Mockup3/>
          </div>
          </div>
          

          <div className="h-min w-full grid grid-cols-2 items-center"> 
              <div className="leading-10 text-black text-lg justify-self-start">Sprig</div>
              <div className="justify-self-end"><UxTag/></div>
          </div>
</div>

      );
    }