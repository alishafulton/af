import React from 'react';
import linkedin from '../../assets/linkedin.png'

// my cute little linkedin logo button!
// a drop shadow, the link, then the icon!

export default function Linkedin() {
  return (
    <div className="p-1 filter drop-shadow-lg">
        <a href="https://www.linkedin.com/in/alishafulton/">
            <img src={ linkedin } alt="" className="h-full w-full" />
        </a>
    </div>
  );
}