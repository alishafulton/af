import React from "react";
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";

import Compliments from "./Compliments";



export default function Blurb () {
  return (
<div>
    <div className="h-2 -mt-3 flex">
      <div className="w-1/6 h-full bg-orange"></div>
      <div className="flex-1 h-full bg-transparent"></div>
      <div className="w-1/5 h-full bg-transparent"></div>
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
