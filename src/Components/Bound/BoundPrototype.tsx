import React from "react"

// prototypes from figma were a little tricky
// thankfully they come with embed codes which work nicely
// but when its displayed there is only so much you can see
// so we change the width so more is visible 
// in different screen aspect ratios


export default function BoundPrototype () {
  return (
    <div className="flex mx-12 h-96 justify-center">
  <iframe 
  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6qN9WFCdBbpowtNV9vJwQ1%2Fbound%3Fpage-id%3D5%253A2%26node-id%3D453-34027%26starting-point-node-id%3D474%253A35060%26t%3DvMPeVuUw8dw5Z00Z-1" 
  className="h-full w-1/2 lg:w-full"/>
  </div>
  );
};