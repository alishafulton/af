import React from "react";
import selfie from '../../assets/Selfie.png'


export default function Selfie() {
  const activeOver = "text-green ";

      return (
        <div className=" hover:bg-white hover:opacity-75 blur">
        <img src ={ selfie } alt="" className="h-full w-full "/>
        </div>
      );
    }