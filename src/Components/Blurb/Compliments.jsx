import React, { useState } from "react";
import s1 from "../../assets/starbucks1.png"
import s2 from "../../assets/starbucks2.png"
import s3 from "../../assets/starbucks3.png"
import s4 from "../../assets/starbucks4.png"
import Overlay from "../ComplimentPhotos/Overlay";


export default function Compliments () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };


    return (
        <>
        <div className="flex justify-center py-4">

        <button onClick={toggleOverlay}>
          <div className="flex"><img src={ s1 } alt="" className=""/></div>
        </button>

          <Overlay isOpen={isOpen} onClose={toggleOverlay}>
            <h1>Content in Overlay</h1>
          </Overlay>

         
          <div className="flex"><img src={ s2 } alt=""/></div>
          <div className="flex"><img src={ s3 } alt="" /></div>
          <div className="flex"><img src={ s4 } alt="" /></div>
        </div>
        </>
    );
}