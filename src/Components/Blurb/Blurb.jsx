import React from "react";
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";
import s1 from "../../assets/starbucks1.png"
import s2 from "../../assets/starbucks2.png"
import s3 from "../../assets/starbucks3.png"
import s4 from "../../assets/starbucks4.png"



export default function Blurb () {
    return (
      <div className="justify-center">
        <img src={ selfie } alt="" class="w-56 float-left p-2"/>
        
        <Text/>
        
        <div className="photos">
          <img src={ s1 } alt="" class="w-30"/>
          <img src={ s2 } alt="" class="w-25"/>
          <img src={ s3 } alt="" class="w-20"/>
          <img src={ s4 } alt="" class="w-15"/>
        </div> 
        <div>
          <div className="font-serif text-xs">
            Appreciation cards from my baristas and 
            managers at Starbucks :)
          </div>
        </div>

      </div>

    );
  };
