import React from 'react';
import ContactForm from './ContactForm';
import Links from './Links';

export default function ContactPage() {
  return (

    <div className=" justify-center pt-4"> 
      <div className="text-2xl tracking-tighter">
        Send me a message!
      </div>
        
      <div className="p-2">
        <ContactForm/>
      </div>
        
      <div className="pt-2 pb-1">
        <Links/>
      </div>
    </div>

  );
}
