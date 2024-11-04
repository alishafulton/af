import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";


export default function App () {
  return (
    <div className="flex w-full justify-items-center p-8 ">
       <Navbar/>
       <PortfolioPage/>
       <Outlet/>
    </div>
    
  )
};
