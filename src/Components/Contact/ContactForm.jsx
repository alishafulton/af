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
      <div className="flex justify-center pb-4 ">

        <form onSubmit={onSubmit} className="w-full justify-center">


          <div className="p-1">
              <input className="flex-1 border-2 border-black  w-full p-2" type="text" name="name" placeholder="Name" required/>
          </div><br/>
          
          <div className="p-1"><input className="flex-1 border-2 border-black w-full p-2" type="email" name="email" placeholder="Email" required/></div><br/>
          <div className="p-1 h-30"><textarea className="flex-1 border-2 border-black  w-full p-2 h-full " name="message" placeholder="Message" required></textarea></div><br/>
  
          <div className="flex justify-center filter drop-shadow-lg"><button type="submit"  className="drop-shadow-sm rounded w-1/2 h-10 bg-orange text-white">Submit</button>
          </div>
        
        </form>
      <span>{result}</span>
      </div>
    );
  }