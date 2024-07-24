import React from 'react';
import behance from '../../assets/behance.png'
import linkedin from '../../assets/linkedin.png'

export default function Links() {
  return (
    <div className="font-sans text-sm"> Additional Links: <br/>
    <div className="flex justify-between">
      <img className="w-6 p-4" src={ behance } alt="" />
      <img className="w-6 p-4" src={ linkedin } alt=""  />
</div></div>
  );
}