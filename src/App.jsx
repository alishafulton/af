import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import './index.css'
import Garamond from './assets/AppleGaramond.ttf';
 
const garamond = Garamond({
  variable: "--font-garamond",
});


export default function App () {
  return (
    <>
      <main className={`${garamond.variable} font-sans`}>
      <Navbar/>
      <Outlet/>
      </main>
    </>
    
  )
};
