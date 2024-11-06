import React from 'react';
import ContactForm from './ContactForm';
import Header from './header';

// the contact PAGE holds the contact FORM!



export default function ContactPage() {
  return (
<div className = "w-screen p-5 justify-items-center cursor-crosshair ">
  <Header/>
  <ContactForm className="w-96"/>
</div>
  );
}
