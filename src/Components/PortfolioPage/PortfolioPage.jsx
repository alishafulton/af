import React, { useState } from "react";
import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
import Project4 from "./project4";
import { NavLink } from "react-router-dom";



export default function PortfolioPage() {
    
      return (
        <div className="w-full">
          <div className="flex flex-row space-x-6 md:space-x-14 my-6 md:my-12 ">
          <NavLink to="/coast/" className="overflow-hidden group"><Project1 className="m-2 " /></NavLink>
          <NavLink to="/channel/" className={({ isActive }) => (isActive ? activeLink : "")}><Project2 className="m-2" /></NavLink>
        </div>
        <div className="flex flex-row space-x-6 md:space-x-14 my-6 md:my-12">
        <NavLink to="/sprig/" className={({ isActive }) => (isActive ? activeLink : "")}><Project3 className="m-2" /></NavLink>
          <Project4 className="m-2" />
        </div>
      </div>
      );
}