import React from 'react';
import ContactForm from './ContactForm';
import Links from './Links';

export default function ContactPage() {
  return (

    <div className="w-full justify-center pt-4 mx-2"> 
      <div className="w-full text-3xl justify-center tracking-tighter">
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
