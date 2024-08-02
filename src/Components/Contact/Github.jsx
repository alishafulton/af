import React from 'react';
import github from '../../assets/github.png'

// my cute little linkedin logo button!
// a drop shadow, the link, then the icon!

export default function Github() {
  return (
    <div className="p-3 filter drop-shadow-lg">
        <a href="https://github.com/alishafulton/af">
            <img src={ github } alt="" className="h-20 w-20" />
        </a>
    </div>
  );
}