import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <div className="flex-col w-screen justify-center">
       <div className="w-full justify-center lg:w-2/3 "> <Navbar /></div>
        <Outlet/>
    </div>
    
  )
};
