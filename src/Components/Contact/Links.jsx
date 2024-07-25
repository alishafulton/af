import React from 'react';
import behance from '../../assets/behance.png'
import linkedin from '../../assets/linkedin.png'

export default function Links() {
  return (
    <>
    <div className="font-sans text-sm"> Additional Links: </div><br/>
    <div className="flex-row justify-between">
      <a href="https://www.behance.net/alishaf2" className="w-12 p-4"><img src={ behance } alt=""  /></a>
      <img src={ linkedin } alt="" className="w-12 p-4" />
</div></>
  );
}