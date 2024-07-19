import React from "react";
import './Extracurriculars.css';
import pic1 from '../../assets/IMG_0640.png'
import before from '../../assets/IMG_0549.png'
import wood from '../../assets/IMG_0556.png'
import pic4 from '../../assets/IMG_0565.png'
import pic5 from '../../assets/IMG_0573.png'
import girls from '../../assets/IMG_0576.png'
import pic7 from '../../assets/IMG_0658.png'
import pic9 from '../../assets/IMG_0739.png'
import pic10 from '../../assets/IMG_0940.png'
import pic11 from '../../assets/IMG_0944.png'
import pic13 from '../../assets/IMG_0967.png'


export default function Extra () {
    return (
      <div className="extras">
        <img src={ before } alt="" className="bigpic"/> 
        <img src={ wood } alt="" className="smallpic-v"/>
        <img src={ girls } alt="" className="pic"/>
        <img src={ pic1 } alt="" className="pic"/>
        <img src={ pic4 } alt="" className="pic"/>
        <img src={ pic5 } alt="" className="pic"/>
        <img src={ pic9 } alt="" className="pic"/>
        <img src={ pic10 } alt="" className="pic"/>
        <img src={ pic11 } alt="" className="pic"/>
        <img src={ pic7 } alt="" className="pic"/>
        <img src={ pic13 } alt="" className="bigpic"/>

        </div>
    );
  };