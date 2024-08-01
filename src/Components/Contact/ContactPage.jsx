import React from 'react';
import ContactForm from './ContactForm';
import Links from './Links';

export default function ContactPage() {
  return (

    <div className="grid grid-cols-5 xl:grid-cols-7 mt-6 justify-center"> 
      <div className="col-start-2 xl:col-start-3 col-span-3 ">
        <div className="text-center font-serif text-3xl tracking-tight">Send me a message:</div>
      
        
      <div className="m-2">
        <ContactForm/>
      </div>
        
        <Links/>
    </div>
</div>
  );
}
