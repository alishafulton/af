import React, {useState} from 'react';
import sprig1 from './../../assets/sprig1.png';
import sprig2 from './../../assets/sprig2.png';
import sprigcover from './../../assets/sprigcover.png';
import SprigPrototype from './SprigPrototype';

// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function Sprig () {

    const [showBtn, setShowBtn] = useState("myBtn none");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setShowBtn("myBtn");
      } else {
        setShowBtn("none");
      }
    }
  
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <div className="flex-col max-w-4xl justify-items-center ">
              <img src = {sprigcover} alt="" />
              <SprigPrototype/>
              <img src = {sprig1} alt="" />
              <img src = {sprig2} alt="" />
            </div>


        <div>
        <button
        onClick={topFunction}
        id="myBtn"
        className={showBtn}
        title="Go to top" >top
      </button>
                     </div>
        </div>
    );
};


