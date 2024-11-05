import React from "react"

// prototypes from figma were a little tricky
// thankfully they come with embed codes which work nicely
// but when its displayed there is only so much you can see
// so we change the width so more is visible 
// in different screen aspect ratios


export default function CoastPrototype () {
    return (
      <div className="h-48 align-middle justify-center">
          <a href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fn1MAVIcv7nkcqeTpwo0CpA%2F3.3--Primary-%2526-Secondary-Actions%3Fpage-id%3D0%253A44%26node-id%3D1118-714%26viewport%3D684%252C531%252C0.18%26t%3DE4LyJHnr7f3kuQ4t-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1118%253A696">
            <div className=" h-12 w-1/3 bg-black text-white ">
              Open in a new window
             </div>
          </a>
      </div>
    
);

};