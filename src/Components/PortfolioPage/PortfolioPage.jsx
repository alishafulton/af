import React, { useState } from "react";
import Mockup from "./mock1";



export default function PortfolioPage() {
    
      return (
        <div className="w-full">
          <div className="w-64 border border-gray-200">
          <div className="w-52 justify-items-center">
            <Mockup/>
          </div>
          </div>
        </div>

      );
}