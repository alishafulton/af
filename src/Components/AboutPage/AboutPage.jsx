import React from "react";
import Blurb from "./Blurb";
import Resume from "./Resume";



export default function AboutPage() {
    
      return (
        <div className="flex flex-col w-full justify-center justify-items-center ">
            <Blurb />
            <Resume />
        </div>
      );
    }