import React from "react";
import selfie from '../../assets/Selfie.png'


export default function Selfie() {

      return (
        <div className="w-40 md:w-52 justify-center">
        <img src ={ selfie } alt="" className="h-full w-full "/>
        </div>
      );
    }