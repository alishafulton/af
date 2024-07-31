import React from "react";
import Text from "../Text/text";
import Compliments from "./Compliments";
import Selfie from "./Selfie";



export default function Blurb () {
  return (
<div>



    <div className="justify-center flex">
      <div className="w-1/2 float-left pr-3 pb-0.5"><Selfie /></div>
        
      <Text/>

      <div className="m-2">
        <Compliments/>
      </div>
    </div>
</div>
  );
};
