import React from "react";
import './Blurb.css';
import selfie from '../../assets/CurrentPhoto.png'
import Intro from "../Intro/Intro";
import AnotherIntro from "../AnotherIntro/AnotherIntro";
import ThirdIntro from "../ThirdIntro/ThirdIntro";

export default function Blurb () {
    return (
      <div className='blurb'>
        <img src={ selfie } alt="" className="selfie"/>

        <div className="intro">< Intro /> < AnotherIntro />< ThirdIntro /></div> 
        </div>

    );
  };
