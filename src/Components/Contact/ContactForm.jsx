import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

// The Important Stuff 
// aka gotta save what you say
// to me so I can see it later!

export const ContactForm = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  // we use this time to recall some ~secrets~

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const SERVICE_ID = process.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = process.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.VITE_PUBLIC_KEY;
  

    const templateParams = {
    from_name: name,
    from_email: email,
    to_name: 'Alisha',
    message: message,
    }
  

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then((response) => {
      console.log("Message sent!", response);
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((error) => {
      console.error("Error sending!", error);
    });
};

  return (
     <form onSubmit={handleSubmit} className="form">
        <input 
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <input 
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setName(e.target.value)} />
         <textarea 
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)} >

        </textarea>

      <button type="submit">Send Message</button>
     </form>
  );
};