import React from 'react';
import ContactForm from './ContactForm';
import Links from './Links';

export default function ContactPage() {
  return (

    <div className="w-full justify-center pt-4"> 
      <div className="w-full justify-center text-2xl tracking-tighter">
        Send me a message!
      </div>
        
      <div className="p-2 mb-1">
        <ContactForm/>
      </div>
        
        <Links/>
    </div>

  );
}
