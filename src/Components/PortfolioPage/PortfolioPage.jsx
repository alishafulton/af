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
    
    
    // this is what we're returning aka output
    // first division is our nav list as buttons
    
      return (
        <div className = "w-full  mx-2">
        <div className = "flex-row justify-between text-xl tracking-tighter">

        <div className="flex" onClick={sprigClick}>
          sprig
        </div>
    
        <div className="flex" onClick={channelClick}>
          channel
        </div>
    
        <div className="flex" onClick={coastClick}>
          coast
        </div>

        <div className="flex" onClick={boundClick}>
          bound
        </div>

    </div>

    <div>
    <SprigBlurb/> 
    <ChannelBlurb/>
    <CoastBlurb/>
    <BoundBlurb/>
    </div>
    </div>


    
      );
}