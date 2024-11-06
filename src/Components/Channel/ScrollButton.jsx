import React, { useState } from 'react';

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

export default function ScrollUp() {
    return (
    <button onclick= { scrollToTop }
            className="scroll-to-top fixed z-30 bottom-6 right-6 py-2 px-4
                       bg-pink text-white rounded-full 
                       transition duration-300 hover:bg-gray-700 
                       hover:text-gray-200">
                        <div className="w-min" style={{ display: visible ? "inline" : "none"}}>up</div></button> 
                        
                    );
                }