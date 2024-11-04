import React, { useState } from "react";




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
        return <></>;
      }
        return null;
      }


    function ChannelBlurb() {
    if (channelVisible) {
        return <></>;
    }
        return null;
    }


    function CoastBlurb() {
        if (coastVisible) {
            return <> </> ;
        }
            return null;
        }

    function BoundBlurb() {
        if (boundVisible) {
            return <></> ;
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
    // the second is our output which is the diff
    // sections of my about page
    
      return (
        <>hello</>


    
      );
}