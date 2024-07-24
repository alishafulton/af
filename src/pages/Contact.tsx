import React from "react";
import { Outlet } from "react-router-dom";
import ContactPage from "../Components/Contact/ContactPage";
  
export default function Contact () {

    return (
      <div>
        <ContactPage/>
        <Outlet/>
      </div>

    );
  };
  