import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';


export default function Links() {
  return (
    <div className="pt-2">
    <div className="flex justify-center font-sans text-base tracking-tighter"> Additional Links: </div>

        <div className="flex justify-between content-start mx-8">
        <Linkedin/><Behance/>
</div></div>
  );
}