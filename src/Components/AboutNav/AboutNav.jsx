import React, { useState } from "react";

export default function AboutNav() {
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