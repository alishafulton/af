import React from "react";
import { Outlet } from "react-router-dom";
import ContactPage from "../Components/Contact/ContactPage";
  
export default function Contact () {

    return (
      <div className= "content-start">
        <ContactPage/>
        <Outlet/>
      </div>

    );
  };
  