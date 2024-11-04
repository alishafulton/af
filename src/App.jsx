import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <div className="w-full justify-center p-8 ">
      <div className="flex flex-col">
       <Navbar/><br/>
       <Outlet/>
       </div>
    </div>
    
  )
};
