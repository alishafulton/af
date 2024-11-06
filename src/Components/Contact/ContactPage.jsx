import React from 'react';
import ContactForm from './ContactForm';
import Header from './header';
import DiscoBall from './../../assets/disco.mov';

// the contact PAGE holds the contact FORM!



export default function ContactPage() {
  return (
    <>
<div className = "flex flex-col relative w-screen h-lvh p-5 justify-center cursor-crosshair bg-transparent z-60 ">
  <Header/>
  <ContactForm />
</div>


  <div className="flex absolute top-0 h-lvh flex-shrink-0 bg-pink z-50">
    <video className="object-cover"
            muted autoPlay loop playsInline disablePictureInPicture >
    <source src={ DiscoBall }  type="video/webm"></source>
  </video>

  </div>



</>
  );
}
