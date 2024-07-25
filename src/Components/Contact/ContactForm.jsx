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
      <div className="justify-items-center pb-4">
        <form onSubmit={onSubmit} className="p-2">
          <div className="p-2"><input className="flex-1 border-2 border-black  w-full p-2" type="text" name="name" placeholder="Name" required/></div><br/>
          <div className="p-2"><input className="flex-1 border-2 border-black w-full p-2" type="email" name="email" placeholder="Email" required/></div><br/>
          <div className="p-2 h-20"><textarea className="flex-1 h-fit border-2 border-black  w-full p-2" name="message" placeholder="Message" required></textarea></div><br/>
  
          <button type="submit" className="w-1/2 h-10 border-2 border-white rounded-sm bg-orange text-white">Submit Form</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }