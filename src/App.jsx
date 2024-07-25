import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <div className="content-start">
      <div className="sticky">
        <Navbar/>
      </div>
      <Outlet/>
    </div>
    
  )
};
