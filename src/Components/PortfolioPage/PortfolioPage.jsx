import React, { useState } from "react";
import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
import Project4 from "./project4";



export default function PortfolioPage() {
    
      return (
        <div className="w-full">
          <div className="flex flex-row space-x-6 my-6">
          <a href="https://alishafulton.github.io/coast"><Project1 className="m-2" /></a>
          <Project2 className="m-2" />
        </div>
        <div className="flex flex-row space-x-6 my-6">
          <Project3 className="m-2" />
          <Project4 className="m-2" />
        </div>
      </div>
      );
}