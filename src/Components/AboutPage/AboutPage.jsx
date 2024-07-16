import React, { useState } from "react";
import './AboutPage.css'
import Blurb from "../Blurb/Blurb";
import Extra from "../Extracurriculars/Extracurriculars";
import Spotify from "../Spotify/Spotify";

export default function AboutPage() {
  const [isOn, setIsOn] = useState(true);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);

  function toggle() {
    setIsOn((isOn) => !isOn);
    setIsOn2((isOn2) => !isOn2);
    setIsOn3((isOn3) => !isOn3);
  }


  return (
    <div className="results">
        <div className="links">
            <ul>
            <button onClick={toggle}><li>bio</li></button> <br/>
            <button onClick={toggle}><li>extracurriculars</li></button><br />
            <button onClick={toggle}><li>spotify</li></button>
            </ul>
            </div>
      {isOn && <Blurb />}
      {isOn2 && <Extra />}
      {isOn3 && <Spotify />}
    </div>
  );
}