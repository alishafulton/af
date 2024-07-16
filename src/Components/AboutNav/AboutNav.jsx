import React from "react";
import './AboutNav.css';


export default function AboutNav () {
    return (
      <div className='navsection'>
        <select name = "selectedAbout">
        <h5>
          <option value="about me">about me</option><br/>
          <option value="extracurriculars">extracurriculars</option><br/>
          <option value="spotify">spotify</option>
          </h5>
          </select>
        </div>
    );
  };