import React from 'react';
import ContactRestAPI from './ContactRestAPI.jsx';
import './ContactPage.css'
import ContactForm from './ContactForm.jsx';


export default function ContactPage() {
  return (
    <div className="Contact">
      <h1>Contact Me!</h1>
      <ContactForm/>
      <ContactRestAPI/>
    </div>
  );
}
