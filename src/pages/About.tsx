import React from "react";
import { Outlet } from "react-router-dom";
import AboutPage from "../Components/AboutPage/AboutPage";
  
  export default function About () {
    return (

      <div className= "justify-center flex w-full">
        <AboutPage />
        <Outlet/>
      </div>
      
    )
  };
  