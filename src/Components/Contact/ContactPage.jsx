import React from 'react';
import ContactForm from './ContactForm';
import Header from './header';


// the contact PAGE holds the contact FORM!



export default function ContactPage() {
  return (
<div className = "flex flex-col w-screen h-screen p-5 justify-center cursor-crosshair ">
  <Header/>
  <ContactForm />

  <div className="relative flex h-[80vh] flex-shrink-0 z-40">
    <video className="absolute flex h-full w-full object-cover "
            muted autoplay loop playsinline disablepictureinpicture >
    <source src="./../../assets/disco.mov"  type="video/webm"></source>
  </video>

  </div>

</div>
  );
}
