import React from 'react';
import ContactForm from './ContactForm';
import Header from './header';
import DiscoBall from './Disco';

// the contact PAGE holds the contact FORM!



export default function ContactPage() {
  return (
<div className = "flex flex-col w-screen h-screen p-5 justify-center cursor-crosshair ">
  <Header/>
  <ContactForm className="z=11" />
  <DiscoBall className="z-10" />

</div>
  );
}
