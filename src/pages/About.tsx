import React from "react";
import { Outlet } from "react-router-dom";
import AboutPage from "../Components/AboutPage/AboutPage";
  
  export default function About () {
    return (

      <div className= "flex w-screen justify-center m-1">
        <AboutPage />
        <Outlet/>
      </div>
      
    )
  };
  