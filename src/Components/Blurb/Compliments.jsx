import React, { useState } from "react";
import s1 from "../../assets/starbucks1.png"
import s2 from "../../assets/starbucks2.png"
import s3 from "../../assets/starbucks3.png"
import s4 from "../../assets/starbucks4.png"
import Carousel from "./Carousel.jsx";
import Overlay from "../ComplimentPhotos/Overlay.jsx";




export default function Compliments () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };


  const slides = [
    "./starbucks1.png",
    "./starbucks2.png",
    "./starbucks3.png",
    "./starbucks4.png",
  ]


    return (
      <>
        <button onClick={toggleOverlay}>
          <div className="flex justify-center py-4">
            <div className="flex"><img src={ s1 } alt="" className=""/></div>
            <div className="flex"><img src={ s2 } alt=""/></div>
            <div className="flex"><img src={ s3 } alt="" /></div>
            <div className="flex"><img src={ s4 } alt="" /></div>
          </div>
        </button>

          <Overlay isOpen={isOpen} onClose={toggleOverlay}>

           <div className="flex justify-center items-center h-screen bg-purple">
              <div className="max-w-lg -mt-4">

                <Carousel autoSlide={false} >
                   {[...slides.map((s) => (
                    <img src={s} />
                   )),]}
              </Carousel>
             </div>
           </div>


         </Overlay>

      </>
    );
}