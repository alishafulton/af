import React from 'react';
import ContactForm from './ContactForm';
import Header from './header';

// the contact PAGE holds the contact FORM!



export default function ContactPage() {
  return (
<div className = "flex flex-col w-screen p-5 justify-center cursor-crosshair ">
  <Header/>
  <ContactForm className="justify-center" />
</div>
  );
}
