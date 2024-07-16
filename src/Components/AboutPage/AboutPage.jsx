import React, { useState } from "react";
import './AboutPage.css'

export default function AboutPage() {
  const [isOn, setIsOn] = useState(false);

  function toggle1() {
    setIsOn((isOn) => !isOn);
  }


  return (
    <div className="Results">
      {isOn && <Blurb/>}
      <button onClick={toggle1}>about me</button>
    </div>
  );
}