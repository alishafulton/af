import React, { useState } from "react";
import Blurb from "../Blurb/Blurb";
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
     return  <>
      <div className="flex">
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1GvMJmqjMIttENpQpH68MD?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div></>;
      }
     return null;
      }

    function BioColor() {
      if (bioVisible) {
        return <div className="text-black text-2xl xl:text-3xl tracking-tighter">bio</div>;
      }
    }

    
    
    // this is what we're returning aka output
    // first division is our nav list as buttons
    
return (
<div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-2 mt-1 lg:mt-4 ">

  
    <div className="grid grid-cols-3 content-start md:grid-cols-1 lg:col-start-2 ">

          <div className="flex justify-self-start cursor-pointer md:my-2" onClick={bioClick}>
            <BioColor/>
          </div>
    
          <div className="flex justify-self-middle md:justify-self-start cursor-pointer md:my-2" onClick={extraClick}>
            extracurriculars
          </div>
    
         <div className="flex justify-self-end md:justify-self-startcursor-pointer md:my-2" onClick={spotifyClick} >
            spotify
         </div>
    </div>
    

  <div className="flex justify-center lg:col-start-3 md:col-span-2 mt-2 lg:mt-4 ">
    <BioBlurb /> 
    <ExtrasBlurb />
    <SpotifyBlurb />
  </div>
</div>
   

    
      );
};