import React from "react";
import './Blurb.css';
import selfie from '../../assets/CurrentPhoto.png'
import Intro from "../Intro/Intro";
import AnotherIntro from "../AnotherIntro/AnotherIntro";

export default function Blurb () {
    return (
      <div className='blurb'>
        <img src={ selfie } alt="" className="selfie"/>

        <div className="bio-blurb"><div className="intro">< Intro /></div>
        <p>From learning to read at age three, to getting my Girl Scout Bronze, 
          Silver and Gold Awards, I have always been an avid learner. In high school,
          I took two years of a Practicum Education and Training with four
          internships in educational settings. I continued my education with a Bachelors of
          Science in Educational Studies. I developed my interpersonal skills
          in four more internships, this time focused less on traditional childhood
          education, and instead, in and around my local community. 

        
          <div className="intro">< AnotherIntro /></div> at a Starbucks in Santa Barbara, California, I 
        started taking Computer Science courses online. I used as many free or 
        inexpensive resources that I could to continue learning different coding
        languages, helpful tools and programs like Visual Studio Code. While my head was 
        in my computer in my free time, I spent my mornings growing into a Shift 
        Supervisor at Starbucks. I moved from state to state, transferring stores
        and learning an entire new group of people (both baristas and customers!)

        Spending over ten years in customer service has given me a keen ability 
        to assess customer needs and collaborate with others to achieve goals. 
        Now, I've transitioned into UX/UI, where I can hone both my interpersonal 
        skills and my creative talent to help brands develop and nurture customer 
        relationships through technology. With a background in education, I have 
        confidence in on-the-spot problem solving, as well as high levels of emotional 
        intelligence that I hope to bring to any team. I am excited to find a UX/UI Design 
        role that will leverage my customer-centric experience, foster my eagerness to learn, 
        and allow me to create designs that will improve everyday user experiences.</p>
        </div></div>

    );
  };