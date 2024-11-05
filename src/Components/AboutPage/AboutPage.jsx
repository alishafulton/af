import React from "react";
import Blurb from "./Blurb";
import Resume from "./Resume";



export default function AboutPage() {
    
      return (
        <div className="flex flex-col justify-items-center">
            <Blurb />
            <Resume />
        </div>
      );
    }