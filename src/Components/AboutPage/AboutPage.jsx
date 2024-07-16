import React from "react";
import AboutNav from "../AboutNav/AboutNav";
import Blurb from "../Blurb/Blurb";
import './AboutPage.css'

export default function AboutPage () {
    return (
        <div className='aboutpage'>
        <AboutNav/><Blurb/>
        </div>
    );
  };