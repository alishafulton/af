import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <div className="flex-col w-screen justify-center p-1.5 md:p-3">
       <div className="justify-center"> <Navbar className="justify-center" /></div>
        <Outlet/>
    </div>
    
  )
};
