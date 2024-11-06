import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'
import Footer from "./Components/Footer/Footer";


export default function App () {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50 flex justify-center items-center">
        <div className="w-full">
          <Navbar/>
        </div>
        </div>
       
        <div className="flex justify-center justify-items-center">
          <div className="w-full">
            <Outlet/>
          </div>
        </div>

        <div className="w-full justify-center mt-auto absolute left-0 bottom-0 right-0">
          <Footer/>
        </div>

      </div>

    
  )
};
