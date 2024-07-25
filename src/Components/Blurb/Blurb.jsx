import React from "react";
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";
import s1 from "../../assets/starbucks1.png"
import s2 from "../../assets/starbucks2.png"
import s3 from "../../assets/starbucks3.png"
import s4 from "../../assets/starbucks4.png"



export default function Blurb () {
    return (
      <div className="justify-center pt-6 px-4">
        <img src={ selfie } alt="" class="w-1/2 float-left pr-3 pb-0.5"/>
        
        <Text/>

        

        <div className="flex grow justify-between py-2">
          <div className="flex"><img src={ s1 } alt=""/></div>
          <div className="flex"><img src={ s2 } alt=""/></div>
          <div className="flex"><img src={ s3 } alt="" /></div>
          <div className="flex"><img src={ s4 } alt="" /></div>
        </div> 

      </div>

    );
  };
