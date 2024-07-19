import React from "react";
import './Extracurriculars.css';
import wood from '../../assets/IMG_0556.png'
import pic4 from '../../assets/IMG_0565.png'
import pic5 from '../../assets/IMG_0573.png'
import pic7 from '../../assets/IMG_0658.png'
import pic9 from '../../assets/IMG_0739.png'
import pic10 from '../../assets/IMG_0940.png'
import pic11 from '../../assets/IMG_0944.png'
import BigPic from "../BigPic/BigPic";
import Pic1 from "../pic1/pic1";
import BigPic2 from "../BigPic/BigPic2";


export default function Extra () {
    return (
      <div className="extras">
        <BigPic/><br/>
        <div className="texte"> After spending a couple of weeks getting 
        swarmed by crane flies, my cousin and I started 
        seriously considering the idea of screening in their
        200 square foot porch. The bugs are unkind in the Texas heat, 
        (especially in the summer) and they lived across from a creek which
        only worsened the situation. 
        <img src={ wood } alt="" className="smallpic-v"/>  Their porch was already covered with a roof held up by
        pillars, essentially dividing our wall sections into neat and tidy
        shapes. It seemed more and more doable the more time we spent 
        staring at it, swatting mosquitos. We discussed a variety of
        methods we could take and after discussing how we 
        could be the most efficient, we picked a day to get started. <br/>
        
        Brimming with excitement, we triple-measured and wrote down
        exactly what we needed to buy on our first trip to Home Depot.
        <div className="rightpic"><Pic1/> </div> We borrowed an SUV to go back and forth to the store and bought
        what we needed for our first section. <br/>

        This would normally be the part of the story where I tell you
        what an absolute mess it was... except it wasn't. Now, I'm not
        telling you that we are secretly Master Carpenters and it all
        went perfectly. Believe it or not, I even hammered myself a black eye.
        But with help from my aunt and two other cousins, a couple of
        patient Home Depot employees, and our iPhone calculators,
        we did it and we did it well. </div>
        
        <img src={ pic5 } alt="" className="pic"/>
        <img src={ pic9 } alt="" className="pic"/>
        <img src={ pic10 } alt="" className="pic"/>
        <img src={ pic11 } alt="" className="pic"/>
        <BigPic2/>

        </div>
    );
  };