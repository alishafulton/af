import React from 'react';
import ContactForm from './ContactForm';
import Links from './Links';

export default function ContactPage() {
  return (

    <div className="pt-4 justify-center">
      Send me a message!
        <div className="p-2">
          <ContactForm/>
        </div>
        
        <div className="pt-2 pb-1">
          <Links/>
        </div>
    </div>

  );
}
