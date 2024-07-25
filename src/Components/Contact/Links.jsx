import React from 'react';
import behance from '../../assets/behance.png'
import linkedin from '../../assets/linkedin.png'

export default function Links() {
  return (
    <>
    <div className="flex font-sans text-sm"> Additional Links: </div><br/>
        <div className="flex grow justify-between h-10">
            <a href="https://www.behance.net/alishaf2" className=" p-4">
                <img src={ behance } alt="" />
            </a>
            <a href="https://www.behance.net/alishaf2" className=" p-4">
                <img src={ linkedin } alt="" />
            </a>
</div></>
  );
}