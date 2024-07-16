import React, { useState } from "react";
import './AboutPage.css'
import Blurb from "../Blurb/Blurb";
import Extra from "../Extracurriculars/Extracurriculars";
import Spotify from "../Spotify/Spotify";



function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked && '✔'}
      </li>
    );
  }
  
  export default function AboutPage() {
    return (
      <section>
        <ul>
          <Item 
            isPacked={true} 
            name="bio" 
          />
          <Item 
            isPacked={true} 
            name="extracurriculars" 
          />
          <Item 
            isPacked={false} 
            name="spotify" 
          />
        </ul>
      </section>
    );
  }