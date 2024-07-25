import React from 'react';
import behance from '../../assets/behance.png'

export default function Behance() {
  return (
    <div className="p-3 filter drop-shadow-lg">
         <a href="https://www.behance.net/alishaf2">
                <img src={ behance } alt="" className="h-20 w-20"/>
          </a>
    </div>
  );
}