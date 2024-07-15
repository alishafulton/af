import React from "react";
import { Outlet } from "react-router-dom";
import Blurb from "../Components/Blurb/Blurb";
import AboutNav from "../Components/AboutNav/AboutNav";
  
  export default function About () {
    return (
      <>
      <div>
        <div>
      <AboutNav/>
        <Blurb/>
        </div>
        <Outlet/>
      </div>
      </>
    )
  };
  