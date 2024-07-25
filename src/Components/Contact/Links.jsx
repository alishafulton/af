import React from 'react';
import Linkedin from './Linkedin';
import Behance from './Behance';


export default function Links() {
  return (
    <>
    <div className="flex justify-center font-sans text-base tracking-tighter"> Additional Links: </div><br/>

        <div className="flex justify-between content-start mx-4">
        <Linkedin/><Behance/>
</div></>
  );
}