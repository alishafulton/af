import React from 'react';

export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e13bbe7c-9a38-4ada-8d92-7faf09801ded");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className="flex font-sans tracking-tighter">
        <form onSubmit={onSubmit}>
          <input className="flex-1 border-2 border-black" type="text" name="name" required/><br/>
          <input className="flex-1 border-2 border-black" type="email" name="email" required/><br/>
          <textarea className="flex-1 border-2 border-black" name="message" required></textarea><br/>
  
          <button type="submit" className="w-1/3 border-2 border-white rounded-sm bg-orange text-white">Submit Form</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }