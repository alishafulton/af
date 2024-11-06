import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <>
      <div className="flex flex-col mx-4 justify-items-center">
       <Navbar/>
       <Outlet/>
       </div>
    </>
    
  )
};
