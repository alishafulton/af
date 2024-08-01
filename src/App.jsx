import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <div className="flex-col w-screen justify-center p-2.5 md:p-5">
       <div className="justify-center"> <Navbar className="justify-center" /></div>
        <Outlet/>
    </div>
    
  )
};
