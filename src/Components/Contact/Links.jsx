import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';
import Github from './Github';

// Just a container for my links to keep em cute n together

export default function Links() {
  return (
    <><div className="flex justify-center font-serif text-lg lg:text-xl tracking-tight py-2"> Additional Links: </div>

        <div className="grid grid-cols-3 justify-center">
        <Linkedin/>
        <Behance/>
        <Github/>
        </div></>
  );
}