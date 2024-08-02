import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';
import Github from './Github';

// Just a container for my links to keep em cute 'n' together

export default function Links() {
  return (
    <div className="flex flex-col justify-center mt-4">
      <div className="flex justify-center font-serif text-lg lg:text-xl tracking-tight"> Hi, it's me, just readjusting some things here! </div><br/>


{/* for the life of me i cant understand why my github icon is not participating  */}
        <div className="grid grid-cols-3 m-16">
<Linkedin/>
<Behance/>
<Github/>
        </div>

    </div>
  );
}