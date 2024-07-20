import React from "react";
import './Blurb.css';
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";
import s1 from "../../assets/starbucks1.png"
import s2 from "../../assets/starbucks2.png"
import s3 from "../../assets/starbucks3.png"
import s4 from "../../assets/starbucks4.png"



export default function Blurb () {
    return (
      <div className='blurb'>
        <img src={ selfie } alt="" className="selfie"/>
        
        <Text/>
        
        <div className="photos">
          <img src={ s1 } alt="" className="s1"/>
          <img src={ s2 } alt="" className="s2"/>
          <img src={ s3 } alt="" className="s3"/>
          <img src={ s4 } alt="" className="s4"/>
        </div> 

      </div>

    );
  };
