import React from "react";
import selfie from '../../assets/Selfie.png'


export default function Selfie() {
    
      return (
        <div className="filter blur-none hover:blur-[2x]">
        <img src ={ selfie } alt="" className="h-full w-full "/>
        </div>
      );
    }