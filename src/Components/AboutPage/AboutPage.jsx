import React, { useState } from "react";
import './AboutPage.css'
import Blurb from "../Blurb/Blurb";




export default function AboutPage() {

    
    
    // set constants with a name, toSet and tf
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

    function BioBlurb() {
      if (bioVisible) {
        return "we're gonna figure iit out";
      }
        return null;
      }


      function ExtrasBlurb() {
        if (extraVisible) {
          return "extry extry";
        }
          return null;
        }


        function SpotifyBlurb() {
            if (spotifyVisible) {
              return "spotiiiifyyyyyyyyyy";
            }
              return null;
            }
    
    
    // this is what we're returning aka output
    // first division is our nav list as buttons
    
      return (
        <div>
    <div class = "nav-menu">
        <button onClick={bioClick}>
          bio
        </button>
    
        <button onClick={extraClick}>
          extracurriculars
        </button>
    
        <button onClick={spotifyClick}>
          spotify
        </button>
    </div>

    <div>
    < BioBlurb /> 
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