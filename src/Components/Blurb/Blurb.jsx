import React from "react";
import './Blurb.css';
import selfie from '../../assets/CurrentPhoto.png'

export default function Blurb () {
    return (
      <div className='blurb'>
        <img src={ selfie } alt="" className="selfie"/>

        <div className="bio-blurb">
        <h1>Working over ten years in customer service has given me a keen ability 
        to assess customer needs and collaborate with others to achieve goals. 
        Now I’ve transitioned into UX/UI, where I can hone both my interpersonal 
        skills and my creative talent to help brands develop and nurture customer 
        relationships through technology. With a background in education, I have 
        confidence in on-the-spot problem solving, as well as high levels of emotional 
        intelligence that I hope to bring to any team. I am excited to find a UX/UI Design 
        role that will leverage my customer-centric experience, foster my eagerness to learn, 
        and allow me to create designs that will improve everyday user experiences.
        
        I am actively seeking new opportunities and am open to collaborating on exciting 
        projects. Send me a message, let’s connect! 
        
        To learn more about my work, check out my portfolio!</h1>
        </div>
        
        </div>
      
    );
  };
  
