import React from 'react';
import behance from '../../assets/behance.png'
import linkedin from '../../assets/linkedin.png'

export default function Links() {
  return (
    <>
    <div className="flex justify-center font-sans text-base tracking-tighter"> Additional Links: </div><br/>
        <div className="flex grow justify-between px-6">
            <a href="https://www.behance.net/alishaf2" className="flex h-2 w-2 px-4">
                <img src={ behance } alt="" />
            </a>
            <a href="https://www.behance.net/alishaf2" className="flex h-2 w-2 px-4">
                <img src={ linkedin } alt="" />
            </a>
</div></>
  );
}