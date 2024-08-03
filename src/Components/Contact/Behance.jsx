import React from 'react';
import behance from '../../assets/behance.png'

// my cute little behance logo button!
// a drop shadow, the link, then the icon!

export default function Behance() {
  return (
    <div className="p-1 filter drop-shadow-lg">
         <a href="https://www.behance.net/alishaf2">
                <img src={ behance } alt="" className="h-20 w-20"/>
          </a>
    </div>
  );
}