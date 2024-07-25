import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';


export default function Links() {
  return (
    <div className="pt-1 ">
    <div className="flex justify-center font-sans text-lg tracking-tighter"> Additional Links: </div>

        <div className="w-1/2 justify-between content-start pt-1">
        <Linkedin className="flex-inital"/><Behance className="flex-inital"/>
</div></div>
  );
}