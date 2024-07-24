import React from "react";
import { Outlet } from "react-router-dom";
import PortfolioPage from "../Components/PortfolioPage/PortfolioPage";
  
export default function Portfolio () {

    return (
      <div className= "content-start">
        <PortfolioPage/>
        <Outlet/>
      </div>

    );
  };
  