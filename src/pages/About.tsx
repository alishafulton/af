import React from "react";
import { Outlet } from "react-router-dom";
import AboutPage from "../Components/AboutPage/AboutPage";
  
// my pages for the react router DOM
// this is the about page so we export the about page
// this is one of those things where i only understood
// enough to make it work.. 

// would love more info on this lol


  export default function About () {
    return (

      <div className= "flex max-w-5xl justify-center">
        <AboutPage />
        <Outlet/>
      </div>
      
    )
  };
  