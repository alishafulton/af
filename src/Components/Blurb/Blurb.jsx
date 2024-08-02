import React from "react";
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";
import Compliments from "./Compliments";

// blurb is my about me page content
// the text, and then my compliments

export default function Blurb () {
  return (
<div>
    <div className="justify-center px-2">
      <img src={ selfie } alt="" className="w-64 md:w-72 float-left pr-3 pb-0.5"/>    
      <Text/>
    </div>
    
    <div className="m-2">
      <Compliments/>
    </div>
</div>
  );
};
