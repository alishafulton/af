import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';


export default function Links() {
  return (
    <><div className="flex justify-center font-sans text-lg tracking-tighter"> Additional Links: </div>

        <div>
        <Linkedin/><Behance/>
        </div></>
  );
}