import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <div className="flex-col w-screen justify-center">
       <div className="w-full lg:w-2/3 justify-center"> <Navbar className="mt-6"/></div>
        <Outlet/>
    </div>
    
  )
};
