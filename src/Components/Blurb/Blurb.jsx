import React from "react";
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";

import Compliments from "./Compliments";



export default function Blurb () {
  return (
<div c>
    <div className="h-2 flex py-1">
      <div className="flex-1 bg-orange"></div>
      <div className="flex-1 bg-green"></div>
      <div className="flex-1 bg-green"></div>
    </div>


      <div className="justify-center pt-6 px-3">
        <img src={ selfie } alt="" class="w-1/2 float-left pr-3 pb-0.5"/>
        
        <Text/>

        <div className="p-2">
          <Compliments/>
        </div>

    </div>
</div>
  );
};
