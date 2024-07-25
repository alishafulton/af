import React from 'react';
import linkedin from '../../assets/linkedin.png'

export default function Linkedin() {
  return (
    <div className="p-2">
        <a href="https://www.linkedin.com/in/alishafulton/">
            <img src={ linkedin } alt="" className="h-20 w-20" />
        </a>
    </div>
  );
}