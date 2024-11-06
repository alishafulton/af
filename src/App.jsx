import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'
import Footer from "./Components/Footer/Footer";


export default function App () {
  return (
    <>
      <div className="flex flex-col mx-4">
       <Navbar/>
       <Outlet/>
       <Footer className="align-bottom"/>
       </div>
    </>
    
  )
};
