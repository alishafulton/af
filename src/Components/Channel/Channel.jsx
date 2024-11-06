import React from 'react';
import channel1 from '../../assets/channel1.png';
import channel2 from '../../assets/channel2.png';
import channel3 from '../../assets/channel3.png';
import channel4 from '../../assets/channel4.png';
import channel5 from '../../assets/channel5.png';
import ScrollButton from './ScrollButton';




// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function Channel () {
    return (<div>
   
   
        <div className="flex-col max-w-4xl justify-items-center ">
        <img src={ channel1 } alt="" className="p-0" />
        <img src={ channel2 } alt="" className="p-0" />
        <img src={ channel3 } alt="" className="p-0" />
        <img src={ channel4 } alt="" className="p-0" />
        <img src={ channel5 } alt="" className="p-0" />

        </div>


        <div
            className="fixed z-30 bottom-6 right-6 py-2 px-4
                       bg-pink text-white rounded-full 
                       transition duration-300 hover:bg-gray-700 
                       hover:text-gray-200">hi
                       </div>
 </div>
    );
}
