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
        <div className="links">
            <button onClick={toggle1}>about me</button> <br/>
            <button>extracurriculars</button><br />
            <button>spotify</button>
            </div>
      {isOn && <Blurb />}
    </div>
  );
}