import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';


export default function Links() {
  return (
    <div className="pt-1">
    <div className="flex justify-center font-sans text-base tracking-tighter"> Additional Links: </div>

        <div className="flex justify-between content-start py-1 mx-10">
        <Linkedin/><Behance/>
</div></div>
  );
}