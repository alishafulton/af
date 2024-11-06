import React from 'react';
import ContactForm from './ContactForm';
import Header from './header';
import DiscoBall from './../../assets/disco.mov';

// the contact PAGE holds the contact FORM!



export default function ContactPage() {
  return (
    <>
<div className = "flex flex-col relative w-screen h-screen p-5 justify-center cursor-crosshair ">
  <Header/>
  <ContactForm />
</div>


  <div className="flex absolute top-0 h-screen w-screen flex-shrink-0 object-cover bg-pink">
    <video
            muted autoPlay loop playsInline disablePictureInPicture >
    <source src={ DiscoBall }  type="video/webm"></source>
  </video>

  </div>



</>
  );
}
