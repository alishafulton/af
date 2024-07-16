import React, { useState } from "react";
import './AboutPage.css'
import Blurb from "../Blurb/Blurb";

export default function AboutPage() {
  const [isOn, setIsOn] = useState(true);

  function toggle1() {
    setIsOn((isOn) => !isOn);
  }


  return (
    <div className="Results">
        <div className="Links">
            <button onClick={toggle1}>about me</button>
        </div>
      {isOn && <Blurb />}
    </div>
  );
}