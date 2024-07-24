import React from "react";
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";
import s1 from "../../assets/starbucks1.png"
import s2 from "../../assets/starbucks2.png"
import s3 from "../../assets/starbucks3.png"
import s4 from "../../assets/starbucks4.png"



export default function Blurb () {
    return (
      <div className="justify-center p-2">
        <img src={ selfie } alt="" class="w-55 float-left pr-4 pb-1"/>
        
        <Text/>

        <div className="font-sans text-s">
            Appreciation cards from my baristas and 
            managers at Starbucks :)
          </div>

        <div className="photos">
          <img src={ s1 } alt="" class="w-12"/>
          <img src={ s2 } alt="" class="w-12"/>
          <img src={ s3 } alt="" class="w-12"/>
          <img src={ s4 } alt="" class="w-12"/>
        </div> 

      </div>

    );
  };
