import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';


export default function Links() {
  return (
    <div className="pt-1">
    <div className="flex justify-center font-sans text-lg tracking-tighter"> Additional Links: </div>

        <div className="flex justify-between content-start pt-2 mx-10">
        <Linkedin/><Behance/>
</div></div>
  );
}