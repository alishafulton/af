import React from "react";
import { Outlet } from "react-router-dom";
import PortfolioPage from "../Components/PortfolioPage/PortfolioPage";
  
  export default function Portfolio () {
    return (

      <div>
        <PortfolioPage/>
        <Outlet/>
      </div>
      
    );
  };
  