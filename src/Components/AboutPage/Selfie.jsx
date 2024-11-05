import React from "react";
import selfie from '../../assets/Selfie.png'


export default function Selfie() {
    
      return (
        <div className="filter hover:bg-white hover:opacity-75 hover:blur">
        <img src ={ selfie } alt="" className="h-full w-full "/>
        </div>
      );
    }