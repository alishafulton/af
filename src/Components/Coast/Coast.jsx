import React, { useState } from 'react';
import coast1 from '../../assets/Coast1.png';
import coast2 from '../../assets/Coast2.png';
import coast3 from '../../assets/Coast3.png';
import coast4 from '../../assets/Coast4.png';
import coast5 from '../../assets/Coast5.png';
import coast6 from '../../assets/Coast6.png';
import coast7 from '../../assets/Coast7.png';
import CoastPrototype from './CoastPrototype';

// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function Coast () {

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
        <img src={ coast1 } alt="" className="p-0" />
        <img src={ coast2 } alt="" className="p-0" />
        <img src={ coast3 } alt="" className="p-0" />
        <img src={ coast4 } alt="" className="p-0" />
        <img src={ coast5 } alt="" className="p-0" />
        <img src={ coast6 } alt="" className="p-0" />

              <CoastPrototype />

            <img src={ coast7 } alt="" className="p-0" />

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