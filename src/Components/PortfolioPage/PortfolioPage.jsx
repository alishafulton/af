import React, { useState } from "react";
import Sprig from "../Sprig/Sprig";
import Coast from "../Coast/Coast";
import Bound from "../Bound/Bound";
import Channel from "../Channel/Channel";



export default function PortfolioPage() {

    
    // set constants with a name, toSet and true or false
    // bio starts as visible first 
    const [sprigVisible, setSprigVisibility] = useState(true);
    const [channelVisible, setChannelVisibility] = useState(false);
    const [coastVisible, setCoastVisibility] = useState(false);
    const [boundVisible, setBoundVisibility] = useState(false);
    
    
    // three separate click toggles for each
    //  each one changes so true theirs and
    //  false to the others
    
      function sprigClick() {
        setSprigVisibility(true)
        setChannelVisibility(false)
        setCoastVisibility(false)
        setBoundVisibility(false)
      }

      function channelClick() {
        setSprigVisibility(false)
        setChannelVisibility(true)
        setCoastVisibility(false)
        setBoundVisibility(false)
      }

      function coastClick() {
        setSprigVisibility(false)
        setChannelVisibility(false)
        setCoastVisibility(true)
        setBoundVisibility(false)
      }

      function boundClick() {
        setSprigVisibility(false)
        setChannelVisibility(false)
        setCoastVisibility(false)
        setBoundVisibility(true)
      }


      // each button click brings a different result
    function SprigBlurb() {
      if (sprigVisible) {
        return <Sprig/>;
      }
        return null;
      }


    function ChannelBlurb() {
    if (channelVisible) {
        return <Channel/>;
    }
        return null;
    }


    function CoastBlurb() {
        if (coastVisible) {
            return <Coast/> ;
        }
            return null;
        }

    function BoundBlurb() {
        if (boundVisible) {
            return <Bound/> ;
        }
            return null;
        }

        function SprigColor() {
          if (sprigVisible) {
            return <div className="text-green hover:text-yellow-600 text-2xl xl:text-3xl tracking-tighter">sprig</div>;
          }
          return <div className="text-black hover:text-yellow-600 text-2xl xl:text-3xl tracking-tighter">sprig</div>;
        }
    
    
        function ChannelColor() {
        if (channelVisible) {
          return <div className="text-green hover:text-yellow-600 text-2xl xl:text-3xl tracking-tighter">channel</div>;
        }
        return <div className="text-black hover:text-yellow-600 text-2xl xl:text-3xl tracking-tighter">channel</div>;
      }
    
    
        function CoastColor() {
            if (coastVisible) {
              return <div className="text-green hover:text-yellow-600 text-2xl xl:text-3xl tracking-tighter">coast</div>;
            }
            return <div className="text-black hover:text-yellow-600 text-2xl xl:text-3xl tracking-tighter">coast</div>;
          }
    
        function BoundColor() {
            if (boundVisible) {
              return <div className="text-green hover:text-yellow-600 text-2xl xl:text-3xl tracking-tighter">bound</div>;
            }
            return <div className="text-black hover:text-yellow-600 text-2xl xl:text-3xl tracking-tighter">bound</div>;
          }

    
    
    // this is what we're returning aka output
    // first division is our nav list as buttons
    
      return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-2 mt-1 lg:mt-4 ">
        <div className = "grid grid-cols-4 content-start md:grid-cols-1 lg:col-start-2 ">

        <div className="flex justify-start cursor-pointer md:my-2" onClick={sprigClick}>
          <SprigColor/>
        </div>
    
        <div className="flex justify-center md:justify-start cursor-pointer md:my-2" onClick={channelClick}>
          <ChannelColor/>
        </div>
    
        <div className="flex justify-center md:justify-start cursor-pointer md:my-2" onClick={coastClick}>
          <CoastColor/>
        </div>

        <div className="flex justify-end md:justify-start cursor-pointer md:my-2" onClick={boundClick}>
          <BoundColor/>
        </div>

    </div>

    <div className="flex justify-center lg:col-start-3 md:col-span-2 mt-2 lg:mt-4 ">
    <SprigBlurb/> 
    <ChannelBlurb/>
    <CoastBlurb/>
    <BoundBlurb/>
    </div>
    </div>


    
      );
}