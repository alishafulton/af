import React from 'react';
import ContactForm from './ContactForm';
import Links from './Links';

export default function ContactPage() {
  return (

    <div className="w-full justify-center mt-6"> 
      <div className="w-full text-center font-serif text-2xl tracking-tight">
        Send me a message:
      </div>
        
      <div className="p-2 mb-4">
        <ContactForm/>
      </div>
        
        <Links/>
    </div>

  );
}
