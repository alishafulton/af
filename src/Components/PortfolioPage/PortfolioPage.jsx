import React, { useState } from "react";
import Project1 from "./project1";
import Project2 from "./project2"



export default function PortfolioPage() {
    
      return (
        <div className="w-full">
          <div className="flex flex-row">
          <Project1/>
          <Project2/>
        </div>
      </div>
      );
}