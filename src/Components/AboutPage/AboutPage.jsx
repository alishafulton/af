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
    const activeLink = "text-purple";
    
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
              return  <div className="flex flex-row gap-8">
              <Spotify link="https://open.spotify.com/playlist/1GvMJmqjMIttENpQpH68MD?si=e83766c8fd694dbf" />
            </div>;
            }
              return null;
            }
    
    
    // this is what we're returning aka output
    // first division is our nav list as buttons
    
      return (
        <div className="flex justify-between grow">
        <div className="flex-grow text-sm">
        
        <div className={({ isActive }) => (isActive ? activeLink : "")}  onClick={bioClick}>
          bio
        </div></div>
    
        <div className="flex-grow text-black text-sm" onClick={extraClick}>
          extracurriculars
        </div>
    
        <div className="flex-grow text-black text-sm" onClick={spotifyClick}>
          spotify
        </div>
    
    
    <div>
    <BioBlurb /> 
    <ExtrasBlurb />
    <SpotifyBlurb />
    </div>
    </div>
   

    
      );
};