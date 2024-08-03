import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';
import Github from './Github';

// Just a container for my links to keep em cute 'n' together

export default function Links() {
  return (
    <div className="justify-center w-full pt-3">



{/* for the life of me i cant understand why my github icon is not participating  */}
        <div className="flex w-full justify-center ">
<Linkedin/>
<Behance/>
<Github/>
        </div>

    </div>
  );
}