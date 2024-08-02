import React from 'react';
import github from '../../assets/github.png'

// my cute little linkedin logo button!
// a drop shadow, the link, then the icon!

export default function Github() {
  return (
    <div className="flex p-1 filter drop-shadow-lg">
        <a href="https://github.com/alishafulton/af">
            <img src={ github } alt="" className="w-full h-full " />
        </a>

    </div>
  );
}