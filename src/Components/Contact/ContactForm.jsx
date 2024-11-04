import React from 'react';

// good golly this one was a doozy

// so first as always, we declare our constants
// like our hook, and also we had to give the
// public keys to make sure the email goes to me
// without using my email address

// then, an if else statement that lets the user
// know that it either sent or did not send (error)

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
  

    // now for what we return
    // thankfully the placeholders tell us what is what
    // and finally a beautiful orange submit button :)

    return (
      <div className="flex justify-center my-2 text-sm tracking-wider">

        <form onSubmit={onSubmit} className="w-full justify-center">


          <div className="m-0.5">
              <input className="flex-1 border rounded border-black  w-full p-2" type="text" name="name" placeholder="Name" required/>
          </div><br/>
          
          <div className="m-0.5">
            <input className="flex-1 border rounded border-black w-full p-2" type="email" name="email" placeholder="Email" required/>
          </div><br/>

          <div className="m-0.5 h-40">
            <textarea className="flex-1 border rounded border-black  w-full p-2 h-full " name="message" placeholder="Message" required>
            </textarea></div><br/>
  
          <div className="flex justify-center "><button type="submit"  className=" w-1/3 h-8 bg-black text-white ">SUBMIT</button>
          </div>
        
        </form>
      <span>{result}</span>
      </div>
    );
  }