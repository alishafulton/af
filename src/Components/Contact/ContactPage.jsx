import React from 'react';
import ContactForm from './ContactForm';
import Links from './Links';

export default function ContactPage() {
  return (
    <div className="p-4 justify-center">
      <ContactForm/>
      <Links/>
    </div>
  );
}
