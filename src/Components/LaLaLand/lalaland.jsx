import React from 'react';
import lalacover from '../../assets/1cover.png';
import lala1 from '../../assets/2.mp4';
import lala2 from '../../assets/3.mp4';
import lala3 from '../../assets/4.mp4';
import lala4 from '../../assets/5.png';
 

// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function LaLaLand () {


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
            <div className="flex flex-col max-w-4xl justify-center justify-items-center ">

                <div className="flex">
                    <img src={ lalacover } className="w-full" />
                </div>

                <div className="flex bg-pink z-40 border-black">
                    <video className="object-cover "
                        muted autoPlay loop playsInline disablePictureInPicture >
                            <source src={ lala1 }  type="video/webm">
                            </source>
                    </video>
                </div>


                <div className="flex bg-pink z-40">
                    <video className="object-cover "
                        muted autoPlay loop playsInline disablePictureInPicture >
                            <source src={ lala2 }  type="video/webm">
                            </source>
                    </video>
                </div>


                <div className="flex bg-pink z-40">
                    <video className="object-cover "
                        muted autoPlay loop playsInline disablePictureInPicture >
                            <source src={ lala3 }  type="video/webm">
                            </source>
                    </video>
                </div>

                <div className="flex">
                    <img src={ lala4 } className="w-full" />
                </div>

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