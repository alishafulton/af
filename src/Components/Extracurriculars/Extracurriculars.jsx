import React from "react";
import './Extracurriculars.css';
import wood from '../../assets/IMG_0556.png'
import pic5 from '../../assets/IMG_0573.png'
import pic10 from '../../assets/IMG_0940.png';
import pic11 from '../../assets/IMG_0944.png'
import BigPic from "../BigPic/BigPic";
import Pic1 from "../pic1/pic1";
import BigPic2 from "../BigPic/BigPic2";
import ComboPics from "../pic3/pic3";


export default function Extra () {
    return (
      <div className="extras">

        <BigPic />
        
        <br />
        <div className="texte"> After spending a couple of weeks getting 
        swarmed by crane flies, my cousin and I started 
        seriously considering the idea of screening in their
        200 square foot porch. The bugs are unkind in the Texas heat 
        (especially in the summer) and they lived across from a creek, which
        only worsened the situation. </div>
        
        <br />
        <img src={ wood } alt="" className="smallpic-v" />  
        <br />

        <div className="texte"> 
        Their porch was already covered with a roof held up by
        pillars, essentially dividing our wall sections into neat and tidy
        shapes. It seemed more and more doable the more time we spent 
        staring at it, swatting mosquitos. We discussed a variety of
        methods we could take and after working out how we 
        could be the most efficient, we picked a day to get started.</div><br/>
        
        <br/><div className="texte"> Brimming with excitement, we measured 
        everything three times and wrote down exactly what we needed 
        to buy on our first trip to Home Depot. 
        <div className="rightpic"> <Pic1/> </div> 
         We borrowed an SUV to go back and forth to the store and bought
        what we needed for our first section. What we assumed would be
        one of three trips ended up being more like five (or six).<br/></div>

        <img src={ pic5 } alt="" className="middlepic"/>

        <ComboPics/>
        
        <br/><div className="texte"> I'm not
        telling you that we are secretly <a href="https://en.wikipedia.org/wiki/Sabrina_Carpenter">Master Carpenters</a> and it all
        went perfectly. Believe it or not, I even hammered myself a black eye.
        But with help from my aunt and two other cousins, a couple of
        patient Home Depot employees, and our iPhone calculators,
        we did it and we did it well. </div><br/>
        
        <img src={ pic10 } alt="" className="pic"/>
        
        <BigPic2/>

        </div>
    );
  };