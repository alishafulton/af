import React from "react";
import wood from '../../assets/IMG_0556.png'
import pic5 from '../../assets/IMG_0573.png'
import pic10 from '../../assets/IMG_0940.png';
import BigPic from "../BigPic/BigPic";
import girls from "../../assets/IMG_0576.png"
import BigPic2 from "../BigPic/BigPic2";
import pic11 from '../../assets/IMG_0944.png'


export default function Extra () {
  return (
    <div>

      <div className="h-2 -mt-1 flex">
          <div className="w-1/5 h-full bg-transparent"></div>
          <div className="w-1/2 h-full bg-orange"></div>
          <div className="grow h-full bg-transparent"></div>
      </div>
      
      
      <BigPic />
      
        
      <div className="flex-col w-full mt-2 mx-3">

        <img src={ wood } alt="" className="w-5/12 float-left mr-2 mb-1 "/>  

        <div className="font-serif text-lg"> After spending a couple of weeks getting 
        swarmed by crane flies, my cousin and I started 
        seriously considering the idea of screening in their
        200 square foot porch. The bugs are unkind in the Texas heat 
        (especially in the summer) and they lived across from a creek, which
        only worsened the situation. </div>
        <br/>
    
        <img src={ girls } alt="" className="w-5/12 float-right ml-2 mb-1"/>

        <div className="font-serif text-lg"> 
        Their porch was already covered with a roof held up by
        pillars, essentially dividing our wall sections into neat and tidy
        shapes. It seemed more and more doable the more time we spent 
        staring at it, swatting mosquitos. We discussed a variety of
        methods we could take and after working out how we 
        could be the most efficient, we picked a day to get started.</div>
        
        <img src={ pic5 } alt="" className="w-5/12 float-left"/>
        <div className="font-serif text-lg"> Brimming with excitement, we measured 
        everything three times and wrote down exactly what we needed 
        to buy on our first trip to Home Depot. We borrowed an SUV to go back and forth to the store and bought
        what we needed for our first section. What we assumed would be
        one of three trips ended up being more like five (or six).<br/></div>

        
        <img src={ pic11 } alt="" className="w-5/12 float-right"/>

        <div className="font-serif text-lg">Now, this would normally be the part of the story where I tell you
        what an absolute mess it was and we all laugh... except it wasn't a mess.</div>
        
        <br/><div className="font-serif text-lg"> I'm not
        telling you that we are secretly <a href="https://en.wikipedia.org/wiki/Sabrina_Carpenter">Master Carpenters</a> and it all
        went perfectly. Believe it or not, I even hammered myself a black eye.
        But with help from my aunt and two other cousins, a couple of
        patient Home Depot employees, and our iPhone calculators,
        we did it and we did it well. </div><br/>
         
        <img src={ pic10 } alt="" className="w-5/12"/>
        
        <BigPic2/>

        </div></div>
    );
  };