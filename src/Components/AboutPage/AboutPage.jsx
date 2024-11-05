import React from "react";
import Blurb from "./Blurb";
import Resume from "./Resume";
import Compliments from "./Compliments";



export default function AboutPage() {
    
      return (
        <div className="flex flex-col justify-items-center w-2/3 md:w-full ">
            <Blurb />
            <Resume />
            <Compliments/>
        </div>
      );
    }