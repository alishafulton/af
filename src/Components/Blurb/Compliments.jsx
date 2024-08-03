import React, { useState } from "react";
import Carousel from "./Carousel.jsx";
import Overlay from "../ComplimentPhotos/Overlay.jsx";
import Starbucks1 from "./starbucks1.jsx";
import Starbucks2 from "./starbucks2.jsx";
import Starbucks3 from "./starbucks3.jsx";
import Starbucks4 from "./starbucks4.jsx";

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
            <div className="-mx-1"><Starbucks1/></div>
            <div className="-mx-1"><Starbucks2/></div>
            <div className="-mx-1"><Starbucks3/></div>
            <div className="-mx-1"><Starbucks4/></div>
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