import React from "react";
import Disco from "./../../assets/disco.mov"

export default function DiscoBall() {
    return (
        <div >
<video muted autoplay loop playsinline disablepictureinpicture className="relative flex h-full w-full flex-shrink-0 object-cover ">
  <source src= { Disco }  type="video/webm"></source>
</video>
</div>
    );
}