import React, { useState } from "react";
import './AboutPage.css'
import Blurb from "../Blurb/Blurb";
import Extra from "../Extracurriculars/Extracurriculars";

export default function AboutPage() {
  const [isOn, setIsOn] = useState(true);
  const [isOn2, setIsOn2] = useState(false);

  function toggle1() {
    setIsOn((isOn) => !isOn);
  }

  function toggle2() {
    setIsOn2((isOn2) => !isOn2);
  }

  return (
    <div className="results">
        <div className="links">
            <ul>
            <li><button onClick={toggle1}>about me</button></li> <br/>
            <li><button onClick={toggle2}>extracurriculars</button></li><br />
            <li><button>spotify</button></li>
            </ul>
            </div>
      {isOn && <Blurb />}
      {isOn2 && <Extra />}
    </div>
  );
}