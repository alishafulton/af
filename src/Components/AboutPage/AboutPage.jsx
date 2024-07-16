import React, { useState } from "react";
import './AboutPage.css'
import Blurb from "../Blurb/Blurb";
import Extra from "../Extracurriculars/Extracurriculars";
import Spotify from "../Spotify/Spotify";


export default function AboutPage() {
    const [didHanSoloShootFirst, setDidHanSoloShootFirst] = useState(true);
    const paragraphHanShotFirst = { Blurb };
    const paragraphHanShotSecond = { Extra };
    
    function toggle() {
      if(didHanSoloShootFirst === true) {
          setDidHanSoloShootFirst(false);
      } else if (didHanSoloShootFirst === false) {
          setDidHanSoloShootFirst(true);
      }
    }
  
    return (
      <div className='container'>
        <button onClick={toggle}>Toggle Shoot</button>  

        <img src={didHanSoloShootFirst ? HanShotFirst : HanShotSecond} />
        <p>{didHanSoloShootFirst ? paragraphHanShotFirst : paragraphHanShotSecond}</p>
      </div>
    );
  }

