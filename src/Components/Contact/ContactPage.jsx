import React from 'react';
import ContactForm from './ContactForm';
import behance from '../../assets/behance.png'
import linkedin from '../../assets/linkedin.png'

export default function ContactPage() {
  return (
    <div className="flex-grow">
      <ContactForm/>

      <br/>
      Additional Links: <br/>
<div className="flex-row justify-between">
      <img src={ behance } alt="" className="w-6 p-4" />
      <img src={ linkedin } alt="" className="w-6 p-4" />
</div>
    </div>
  );
}
