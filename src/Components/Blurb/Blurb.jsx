import React from "react";
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";

import Compliments from "./Compliments";



export default function Blurb () {
  return (
<div>
    <div className="h-4 flex m-1">
      <div className="flex-1 h-full bg-orange"></div>
      <div className="flex-1 h-full bg-green"></div>
      <div className="flex-1 h-full bg-green"></div>
    </div>


      <div className="justify-center pt-6 px-3">
        <img src={ selfie } alt="" class="w-1/2 float-left pr-3 pb-0.5"/>
        
        <Text/>

        <div className="m-2">
          <Compliments/>
      </div>

    </div>
</div>
  );
};
