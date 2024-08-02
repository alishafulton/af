import React from "react";
import { Outlet } from "react-router-dom";
import PortfolioPage from "../Components/PortfolioPage/PortfolioPage";
  
  
// my pages for the react router DOM
// this is the about page so we export the about page
// this is one of those things where i only understood
// enough to make it work.. 

// would love more info on this lol


export default function Portfolio () {

    return (
      <div className= "content-start">
        <PortfolioPage/>
        <Outlet/>
      </div>

    );
  };
  