import React, { useState } from "react";
import s1 from "../../assets/starbucks1.png"
import s2 from "../../assets/starbucks2.png"
import s3 from "../../assets/starbucks3.png"
import s4 from "../../assets/starbucks4.png"
import Carousel from "./Carousel.jsx";
import Overlay from "../ComplimentPhotos/Overlay.jsx";
import Starbucks1 from "./starbucks1.jsx";

// another useState hook, this time to
// open up our lil overlay that contains
// a carousel! lots of nesting 


export default function Compliments () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  // these are my compliments!!!

  const slides = [
    "./starbucks1.png",
    "./starbucks2.png",
    "./starbucks3.png",
    "./starbucks4.png",
  ]



// first section is just my four compliments on my about page
// displayed easily, but wrapped in a button so the overlay opens

// when overlay open = true 
// the overlay contains the carousel object


    return (
      <>
        <button onClick={toggleOverlay}>
          <div className="grid grid-cols-4 py-4">
            <div><Starbucks1/></div>
            <div><img src={ s2 } alt=""/></div>
            <div><img src={ s3 } alt="" /></div>
            <div><img src={ s4 } alt="" /></div>
          </div>
        </button>


          <Overlay isOpen={isOpen} onClose={toggleOverlay}>
          <div className="flex justify-center items-start">
              <div className="flex">
                <Carousel autoSlide={false}>
                   {[...slides.map((s) => (<img src={s} className="p-2 my-10" />)),]}
                </Carousel>
              </div>
          </div>
         </Overlay>

      </>
    );
}