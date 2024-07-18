import React from "react";
import './Blurb.css';
import selfie from '../../assets/CurrentPhoto.png'
import Intro from "../Intro/Intro";


export default function Blurb () {
    return (
      <div className='blurb'>
        <img src={ selfie } alt="" className="selfie"/>
        < Intro /></div> 

    );
  };
