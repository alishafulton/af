import React from 'react';
import './ContactPage.css'
import ContactForm from './ContactForm';
import behance from '../../assets/behance.png'
import linkedin from '../../assets/linkedin.png'

export default function ContactPage() {
  return (
    <div className="Contact">
      <ContactForm/>

      <br/>
      Additional Links: <br/>

      <img src={ behance } alt="" className="logopic" />
      <img src={ linkedin } alt="" className="logopic" />

    </div>
  );
}
