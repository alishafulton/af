import React from "react";
import selfie from '../../assets/Selfie.png'


export default function Selfie() {
  const activeOver = "text-green ";

      return (
        <div>
        <img src ={ selfie } alt="" className="h-full w-full filter blur-none hover:!blur-sm"/>
        </div>
      );
    }