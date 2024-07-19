import React, { useState } from "react";
import './AboutPage.css'
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
              return  <div className="flex flex-row gap-8">
              <Spotify link="https://open.spotify.com/playlist/1GvMJmqjMIttENpQpH68MD?si=e83766c8fd694dbf" />
            </div>;
            }
              return null;
            }
    
    
    // this is what we're returning aka output
    // first division is our nav list as buttons
    
      return (
        <div class ="entirety">
        <div class ="nav-menu">
            <ul>
        <li><button onClick={bioClick}>
          bio
        </button></li>
    
        <li><button onClick={extraClick}>
          extracurriculars
        </button></li>
    
        <li><button onClick={spotifyClick}>
          spotify
        </button></li>
        </ul>
    </div>

    <div>
    <BioBlurb /> 
    <ExtrasBlurb />
    <SpotifyBlurb />
    </div>
    </div>
    // this section is the output of the buttons
    // so we only want one at a time
    // so we check which one is true
    // only what is true is displayed

    
      );
}