import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';


export default function Links() {
  return (
    <><div className="flex justify-center font-serif text-lg tracking-tight"> Additional Links: </div>

        <div className="flex flex-row justify-center">
        <Linkedin/><Behance/>
        </div></>
  );
}