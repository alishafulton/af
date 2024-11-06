import React from 'react';
import ContactForm from './ContactForm';
import Header from './header';
import DiscoBall from './Disco';

// the contact PAGE holds the contact FORM!



export default function ContactPage() {
  return (
<div className = "flex flex-col w-screen h-screen p-5 justify-center cursor-crosshair ">
  <Header/>
  <ContactForm />
  <div className="relative flex h-[80vh] flex-shrink-0 ">

<video className="relative flex h-full w-full flex-shrink-0 object-cover "
    muted autoplay loop playsinline disablepictureinpicture >
  <source src="./../../assets/disco.mov"  type="video/webm"></source>
</video>

  </div>

</div>
  );
}
