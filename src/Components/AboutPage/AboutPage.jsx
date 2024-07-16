import React, { useState } from "react";
import './AboutPage.css'
import Blurb from "../Blurb/Blurb";
import Extra from "../Extracurriculars/Extracurriculars";



export default function AboutPage() {
    const [section, setSection] = useState(true);
    const first = { Blurb };
    const second = { Extra };
    
    function toggle() {
      if(first === true) {
          setSection(false);
      } else if (first === false) {
          setSection(true);
      }
    }
  
    return (
      <div>
        <button onClick={toggle}>Toggle Shoot</button>  
        <div>{section ? first : second}</div>
      </div>
    );
  }

