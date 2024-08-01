import React from "react";
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";
import Compliments from "./Compliments";



export default function Blurb () {
  return (
<div>

    <div className="justify-center">
      <img src={ selfie } alt="" className="w-64 md:w-72 float-left pr-3 pb-0.5"/>    
      <Text/>
    </div>
    
    <div className="m-2">
      <Compliments/>
    </div>
</div>
  );
};
