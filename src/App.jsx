import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <div className="flex w-full justify-items-center p-5 cursor-cell ">
       <Navbar/>
       <Outlet/>
    </div>
    
  )
};
