import React from 'react';
import ContactRestAPI, { ContactForm } from './ContactRestAPI.jsx';
import './ContactPage.css'


export default function ContactPage() {
  return (
    <div className="Contact">
      <h1>Contact Me!</h1>
      <ContactForm/>
      <ContactRestAPI/>
    </div>
  );
}
