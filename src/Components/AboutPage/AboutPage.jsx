import React, { useState } from "react";
import './AboutPage.css'
import Blurb from "../Blurb/Blurb";

export default function AboutPage() {
  const [isOn, setIsOn] = useState(true);

  function toggle1() {
    setIsOn((isOn) => !isOn);
  }


  return (
    <div className="results">
        <ul class="links">
            <li><button onClick={toggle1}>about me</button></li><br/>
            <li><button>extracurriculars</button></li><br/>
            <li><button>spotify</button></li>
        </ul>
      {isOn && <Blurb />}
    </div>
  );
}