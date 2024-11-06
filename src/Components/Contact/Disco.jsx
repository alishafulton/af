import React from "react";
import Disco from "./../../assets/disco.mov"

export default function DiscoBall() {
    return (
        <>
<video muted autoplay loop playsinline disablepictureinpicture >
  <source src= { Disco }  type="video/webm"></source>
</video>
</>
    );
}