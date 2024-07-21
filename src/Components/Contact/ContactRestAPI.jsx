import axios from 'axios';
import React, { useState } from 'react';


// The Important Stuff 
// aka gotta save what you say
// to me so I can see it later!

const ContactRestAPI = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  

  const handleSubmit = async (e) => { 
    e.preventDefault(); 

// we use this time to recall some ~secrets~

    const SERVICE_ID = process.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = process.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.VITE_PUBLIC_KEY;
  

  const data = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Alisha',
        message: message,
      }
    }
  

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
     <><form onSubmit={handleSubmit} className="form">
        <input 
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)} /> <br/>
        <input 
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} /> <br/>
         <textarea 
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)} ><br/>

        </textarea>

      <button type="submit">Send Message</button>
     </form>
     </>
  )
}

export default ContactRestAPI