import React, { useState } from "react";

const [isVisible, setIsVisible] = useState(false);

export default function AboutNav () {
  return (
  <div>
    <button onClick={() => setIsVisible(!isVisible)}>
      {isVisible ? 'Hide content' : 'Show content'}
    </button>
    {isVisible && (
      <div>
        <p>This is the content to show/hide.</p>
      </div>
    )}
  </div>
);
}