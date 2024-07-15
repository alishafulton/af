import React from "react";
import './Blurb.css';
import selfie from '../../assets/CurrentPhoto.png'
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
      <div className='blurb'>
        <img src={ selfie } alt="" className="selfie"/>

        <div className="bio-blurb">
            this is a sentence
        </div>
        
        </div>
      
    );
  };
  
