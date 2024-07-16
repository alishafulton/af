import React, { useState } from "react";
import './AboutPage.css'
import Blurb from "../Blurb/Blurb";
import Extra from "../Extracurriculars/Extracurriculars";
import Spotify from "../Spotify/Spotify";



export default function LightSwitch() {

    const bio = { Blurb }
    const extras = { Extra }
    const spotify = { Spotify }
    
    
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
        setSpotifyVisibility(true)
      }
    
    
    
    // this is what we're returning aka output
    // first division is our nav list as buttons
    
      return (
    <><>
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
    
    // this section is the output of the buttons
    // so we only want one at a time
    // so we check which one is true
    // only what is true is displayed
    
    <div class="which-section">
    {bioVisible ? bio : null}
    {extraVisible ? extras : null}
    {extraVisible ? extras : null}
    </div></>
    </>
    
      );
}