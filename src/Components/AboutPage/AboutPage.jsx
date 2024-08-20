import React, { useState } from "react";
import Blurb from "../Blurb/Blurb";
import Extra from "../Extracurriculars/Extracurriculars";
import { Spotify } from "react-spotify-embed";



export default function AboutPage() {

    
  // we start by setting constants with a name, 
  // toSet and true or false
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
     return  <Spotify link="https://open.spotify.com/playlist/1GvMJmqjMIttENpQpH68MD?si=e83766c8fd694dbf" height={600} width={450}/>
      }
    return null;
  }

// not sure how to make regular link (not navlink) 
// change color when its active.... so were doing
// some more of these useStates, cause it works...
// pink when active, black when not

  function BioColor() {
    if (bioVisible) {
      return <div className="text-pink hover:text-indigo-400 text-2xl xl:text-3xl tracking-tighter">bio</div>;
    }
    return <div className="text-black hover:text-indigo-400 text-2xl xl:text-3xl tracking-tighter">bio</div>;
  }

  function ExtraColor() {
    if (extraVisible) {
      return <div className="text-pink hover:text-indigo-400 text-2xl xl:text-3xl tracking-tighter">extracurriculars</div>;
    }
     return <div className="text-black hover:text-indigo-400 text-2xl xl:text-3xl tracking-tighter">extracurriculars</div>;
  }

  function SpotifyColor() {
     if (spotifyVisible) {
       return <div className="text-pink hover:text-indigo-400 text-2xl xl:text-3xl tracking-tighter">spotify</div>;
     }
     return <div className="text-black hover:text-indigo-400 text-2xl xl:text-3xl tracking-tighter">spotify</div>;
  }


// this is what we're returning aka output!!! 

// first division is our nav list as buttons
    
return (
<div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 md:gap-2 mt-2">

    <div className="grid grid-cols-3 content-start md:grid-cols-1">
          <div className="flex justify-start cursor-pointer lg:my-2" onClick={bioClick}>
            <BioColor/>
          </div>
          <div className="flex justify-center md:justify-start cursor-pointer md:my-2" onClick={extraClick}>
            <ExtraColor/>
          </div>
         <div className="flex justify-end md:justify-start cursor-pointer md:my-2" onClick={spotifyClick} >
            <SpotifyColor/>
         </div>
    </div>
    

  <div className="flex justify-center w-full mt-2 md:col-span-2 ">
    <BioBlurb /> 
    <ExtrasBlurb />
    <SpotifyBlurb />
  </div>
  
</div>
   

    
      );
};