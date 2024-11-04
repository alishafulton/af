import React, { useState } from "react";
import Mockup from "./mock1";



export default function PortfolioPage() {
    
      return (
        <div className="w-full">
          <div className="w-60 border rounded border-gray-400 justify-center">
          <div className="w-52 ">
            <Mockup/>
          </div>
          </div>
        </div>

      );
}