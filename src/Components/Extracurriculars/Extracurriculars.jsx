import React from "react";
import wood from '../../assets/IMG_0556.png'
import pic5 from '../../assets/IMG_0573.png'
import pic10 from '../../assets/IMG_0940.png';
import BigPic from "../BigPic/BigPic";
import girls from "../../assets/IMG_0576.png"
import pic13 from '../../assets/IMG_0967.png'
import pic11 from '../../assets/IMG_0944.png'
import Checkered from "../Checkered/Checkered";

// my extra curriculars page!
// prob gonna redo this one so it works a little better
// bc the purple was all spur of the moment and
// i couldnt decide how to lay it all out

// it works for now!


export default function Extra () {
  return (
    <div>

     <BigPic />

     <div className="flex px-2.5"><Checkered/></div>

    <div className="flex-col w-full mt-2 px-2 pt-5">

    <div className="w-52 bg-purple float-left pr-4 pb-2 mr-2 mb-2"><img src={ wood } alt="" className="w-full ml-0"/></div>

      <div className="font-serif text-lg lg:text-xl 2xl:text-3xl"> After spending a couple of weeks getting 
        swarmed by crane flies, my cousin and I started 
        seriously considering the idea of screening in their
        200 square foot porch. The bugs are unkind in the Texas heat 
        (especially in the summer) and they lived across from a creek, which
        only worsened the situation. </div>
        <br/>
    
        <div className="w-56 bg-purple float-right pl-3 pb-4 ml-2 my-2 "><img src={ girls } alt="" className="w-full mr-0"/></div>

        <div className="font-serif text-lg lg:text-xl"> 
        Their porch was already covered with a roof held up by
        pillars, essentially dividing our wall sections into neat and tidy
        shapes. It seemed more and more doable the more time we spent 
        staring at it, swatting mosquitos. We discussed a variety of
        methods we could take and after working out how we 
        could be the most efficient, we picked a day to get started.</div>
        <br />
        
        <div className="w-56 bg-purple float-left pr-5 pb-2 mr-2 my-2"><img src={ pic5 } alt="" className="w-full ml-0"/></div>

        <div className="font-serif text-lg lg:text-xl"> Brimming with excitement, we measured 
        everything three times and wrote down exactly what we needed 
        to buy on our first trip to Home Depot. We borrowed an SUV to go back and forth to the store and bought
        what we needed for our first section. What we assumed would be
        one of three trips ended up being more like five (or six).</div><br/>

        
        <div className="w-56 bg-purple float-right pl-2 pb-3 ml-4 my-2"><img src={ pic11 } alt="" className="w-full mr-0"/></div>

        <div className="font-serif text-lg lg:text-xl">Now, this would normally be the part of the story where I tell you
        what an absolute mess it was and we all laugh... except it wasn't a mess.</div>
        
        <br/><div className="font-serif text-lg lg:text-xl"> I'm not
        saying that we are secretly <a href="https://en.wikipedia.org/wiki/Sabrina_Carpenter">Master Carpenters</a> and it all
        went perfectly. Believe it or not, I even hammered myself a black eye.
        But with help from my aunt and two other cousins, a couple of
        patient Home Depot employees, and our iPhone calculators,
        we did it and we did it well. </div><br/>
         
        <div className="w-72 bg-purple float-left pr-6 pb-3 mr-2 mt-2 mb-5"><img src={ pic10 } alt="" className="w-full ml-0"/></div>
        
        <div className="font-serif text-lg lg:text-xl">Unfortunately, the heat is 
          worse than the bugs in the summer, so we had to take a 
          small sabbatical until Texas cools off!</div>

        <div className="mt-2"><img src={ pic13 } alt="" className="w-full"/></div>

        </div>
        <br/>
        </div>
    );
  };