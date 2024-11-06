import React from 'react';
import channel1 from '../../assets/channel1.png';
import channel2 from '../../assets/channel2.png';
import channel3 from '../../assets/channel3.png';
import channel4 from '../../assets/channel4.png';
import channel5 from '../../assets/channel5.png';




// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function Channel () {  const [showBtn, setShowBtn] = useState("myBtn none");

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
        <img src={ channel1 } alt="" className="p-0" />
        <img src={ channel2 } alt="" className="p-0" />
        <img src={ channel3 } alt="" className="p-0" />
        <img src={ channel4 } alt="" className="p-0" />
        <img src={ channel5 } alt="" className="p-0" />

        </div>


        <div>
        <button
        onClick={topFunction}
        id="myBtn"
        className={showBtn}
        title="Go to top" >
        Top
      </button>
                     </div>
 </div>
    );
}
