import React from 'react';
import ContactForm from './ContactForm';
import Header from './header';
import DiscoBall from './Disco';

// the contact PAGE holds the contact FORM!



export default function ContactPage() {
  return (
<div className = "grid grid-cols-1 w-screen h-screen p-5 justify-center cursor-crosshair ">
  <Header/>
  <ContactForm />
  <DiscoBall />

</div>
  );
}
