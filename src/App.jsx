import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <div className="flex-col w-screen justify-center">
        <Navbar className="mt-6 w-full lg:w-3/4"/>
        <Outlet/>
    </div>
    
  )
};
