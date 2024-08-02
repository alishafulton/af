import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';
import Github from './Github';

// Just a container for my links to keep em cute n together

export default function Links() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center font-serif text-lg lg:text-xl tracking-tight py-2"> Hi, it's me, just readjusting some things here! </div><br/>

        <div className="grid grid-cols-3 justify-items-center">
        <div className="flex"><Linkedin/></div>
        <div className="flex"><Behance/></div>
        <div className="flex"><Github/></div>
        </div>

    </div>
  );
}