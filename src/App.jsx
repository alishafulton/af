import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'
import { garamond } from "../public/fonts/AppleGaramond.ttf"
 
const garamond = Garamond({
  variable: '--font-garamond',
})


export default function App () {
  return (
    
    <div>
      <style jsx global>{`
      :root {
      --font-garamond: ${garamond.style.fontFamily};
      }
      `}</style>
      <Navbar/>
      <Outlet/>
    </div>
    
  )
};
