import React from "react";
import Mockup2 from "./mock2";
import UxTag from "./uxtag";



export default function Project2() {
    
      return (
<div >
        <div className="w-44 md:w-56 justify-self-center border border-gray-200 group-hover:bg-pink group-hover:bg-opacity-10 group-hover:border-pink transition-all ease-in-out duration-300">
          <div className="w-32 md:w-44 mx-6">
            <Mockup2 />
          </div>
          </div>
          

          <div className="h-min w-full grid grid-cols-2 items-center"> 
              <div className="leading-10 text-black text-lg justify-self-start">Channel</div>
              <div className="justify-self-end"><UxTag/></div>
          </div>
</div>

      );
    }