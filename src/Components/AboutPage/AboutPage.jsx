import React, { useState } from "react";
import Blurb from "../Blurb/Blurb";
import { Spotify } from "../Spotify/Spotify";
import Extra from "../Extracurriculars/Extracurriculars";



export default function AboutPage() {

    
    // set constants with a name, toSet and true or false
    // bio starts as visible first 
    const [bioVisible, setBioVisibility] = useState(true);
    const [extraVisible, setExtraVisibility] = useState(false);
    const [spotifyVisible, setSpotifyVisibility] = useState(false);

    
    // three separate click toggles for each
    //  each one changes so true theirs and
    //  false to the others
    
      function bioClick() {
        setBioVisibility(true)
        setExtraVisibility(false)
        setSpotifyVisibility(false)
      }

      function extraClick() {
        setBioVisibility(false)
        setExtraVisibility(true)
        setSpotifyVisibility(false)
      }

      function spotifyClick() {
        setBioVisibility(false)
        setExtraVisibility(false)
        setSpotifyVisibility(true)
      }


      // each button click brings a different result
    function BioBlurb() {
      if (bioVisible) {
        return <Blurb/>;
      }
        return null;
      }


      function ExtrasBlurb() {
        if (extraVisible) {
          return <Extra/>;
        }
          return null;
        }


        function SpotifyBlurb() {
            if (spotifyVisible) {
              return  <><div className="h-2 -mt-1 flex">
              <div className="w-3/4 h-full bg-transparent"></div>
              <div className="w-1/4 h-full bg-orange"></div>
            </div>
            
            <div className="flex flex-row gap-8 px-4 pt-4 pb-2">
              <Spotify link="https://open.spotify.com/playlist/1GvMJmqjMIttENpQpH68MD?si=e83766c8fd694dbf" />
            </div></>;
            }
              return null;
            }
    
    
    // this is what we're returning aka output
    // first division is our nav list as buttons
    
return (
<div className="w-full grid grid-cols-1 lg:grid-cols-5 lg:gap-2 mt-2">

  
    <div className="lg:col-start-2 lg:grid-cols-1 grid grid-cols-3 content-start">
          <div className="flex justify-self-start text-2xl lg:text-3xl tracking-tighter text-black cursor-pointer " onClick={bioClick}>
            bio
          </div>
    
          <div className="flex justify-self-middle lg:justify-self-start text-2xl lg:text-3xl tracking-tighter text-black cursor-pointer" onClick={extraClick}>
            extracurriculars
          </div>
    
         <div className="flex justify-self-end lg:justify-self-start text-2xl lg:text-3xl tracking-tighter text-black hover:text-pink active:text-pink cursor-pointer" onClick={spotifyClick}>
            spotify
         </div>
    </div>
    

  <div className="flex justify-center lg:col-start-3 lg:col-span-2 ">
    <BioBlurb /> 
    <ExtrasBlurb />
    <SpotifyBlurb />
  </div>
</div>
   

    
      );
};