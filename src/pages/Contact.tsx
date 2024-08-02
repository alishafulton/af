import React from "react";
import { Outlet } from "react-router-dom";
import ContactPage from "../Components/Contact/ContactPage";
  
  
// my pages for the react router DOM
// this is the about page so we export the about page
// this is one of those things where i only understood
// enough to make it work.. 

// would love more info on this lol

export default function Contact () {

    return (
      <div>
        <ContactPage/>
        <Outlet/>
      </div>

    );
  };
  