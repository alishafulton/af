import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'


export default function App () {
  return (
    <div className="justify-center items-center p-5">
       <Navbar/>
       <Outlet/>
    </div>
    
  )
};
