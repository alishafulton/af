import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "react-feather"

// oh this was a fun one to figure out
// my carousel of compliments....

// first we declare the constants, like our hook
// i made autoslide false right now but it's 
// there just in case


const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])


    // now for what we're returning here
    // our slides in the carousel,
    // and the buttons to move em

    return (
        <div className='flex w-full overflow-hidden bg-black'>
            <div className='flex w-full mx-3 transition-transform ease-out duration-500 ' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-2 mx-8">
                <button onClick={prev} className='p-3 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='p-3 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight />
                </button>
            </div>

            <div className='absolute bottom-0 right-0 left-0'>
                <div className='flex items-start justify-center gap-2'>
                    {slides.map((s, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Carousel;