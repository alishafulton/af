import React from "react";
import Selfie from "./Selfie";



export default function AboutPage() {
    
      return (
        <div className = "flex flex-row space-x-6">
            <div className="w-32"><Selfie/></div>
        
        <div className="w-96 text-xs font-mono">
        I am a lifelong learner of educational psychology, including human behavior, motivations, and desires. I am an empathic and active listener who has had years of observational research of others. I am grateful to constantly grow my technology knowledge online. I consider myself to be self-taught on a wide variety of subjects and have taken computer science classes, ux courses through Google and Coursera, and am always challenging myself to learn more. I would be more than thrilled to discuss how my years of retail experience, my degree in education and my obsession with design in technology are all a part of what makes me an incredible user experience designer. 
        </div>
        </div>
      );
    }