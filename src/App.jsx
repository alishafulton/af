import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <div className="flex flex-col w-screen max-w-5xl p-2.5 md:p-5">
       <Navbar className="justify-center"/>
        <Outlet/>
    </div>
    
  )
};
