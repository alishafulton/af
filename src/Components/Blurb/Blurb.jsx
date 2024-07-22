import React from "react";
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";
import s1 from "../../assets/starbucks1.png"
import s2 from "../../assets/starbucks2.png"
import s3 from "../../assets/starbucks3.png"
import s4 from "../../assets/starbucks4.png"



export default function Blurb () {
    return (
      <div className="w-96">
        <img src={ selfie } alt="" className="w-56 float-left"/>
        
        <Text/>
        
        <div className="photos">
          <img src={ s1 } alt="" className="w-56"/>
          <img src={ s2 } alt="" className="w-56"/>
          <img src={ s3 } alt="" className="w-56"/>
          <img src={ s4 } alt="" className="w-56"/>
        </div> 
        <div>
          <text2>
            Appreciation cards from my baristas and 
            managers at Starbucks :)
          </text2>
        </div>

      </div>

    );
  };
