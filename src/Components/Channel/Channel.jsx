import React from 'react';
import channel1 from '../../assets/channel1.png';
import channel2 from '../../assets/channel2.png';
import channel3 from '../../assets/channel3.png';
import channel4 from '../../assets/channel4.png';
import channel5 from '../../assets/channel5.png';


// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
}

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);

export default function Channel () {
    return (<>
    <button onclick= { scrollToTop }
            className="scroll-to-top fixed z-30 bottom-6 right-6 py-2 px-4
                       bg-pink text-white rounded-full 
                       transition duration-300 hover:bg-gray-700 
                       hover:text-gray-200">
                        <div className="w-min">up</div></button>
   
        <div className="flex-col max-w-4xl justify-items-center ">
        <img src={ channel1 } alt="" className="p-0" />
        <img src={ channel2 } alt="" className="p-0" />
        <img src={ channel3 } alt="" className="p-0" />
        <img src={ channel4 } alt="" className="p-0" />
        <img src={ channel5 } alt="" className="p-0" />


        </div>
 </>
    );
}
