import React from "react";
import './Blurb.css';
import selfie from '../../assets/CurrentPhoto.png'
import Text from "../Text/text";



export default function Blurb () {
    return (
      <div className='blurb'>
        <img src={ selfie } alt="" className="selfie"/><Text/>
        </div> 

    );
  };
