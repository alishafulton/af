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
            <button onClick={toggle1}>about me</button> <br/>
            <button onClick={toggle2}>extracurriculars</button><br />
            <button>spotify</button>
            </div>
      {isOn && <Blurb />}
      {isOn2 && <Extra />}
    </div>
  );
}