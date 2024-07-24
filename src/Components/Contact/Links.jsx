import React from 'react';
import behance from '../../assets/behance.png'
import linkedin from '../../assets/linkedin.png'

export default function Links() {
  return (
    <>
    <div className="flex font-sans text-sm"> Additional Links: <br/>
    <div className="flex-row justify-between">
      <img src={ behance } alt="" className="w-6" />
      <img src={ linkedin } alt="" className="w-6" />
</div></div></>
  );
}