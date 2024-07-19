import React from "react";
import './Extracurriculars.css';
import before from '../../assets/IMG_0549.png'
import wood from '../../assets/IMG_0556.png'
import pic4 from '../../assets/IMG_0565.png'
import pic5 from '../../assets/IMG_0573.png'
import girls from '../../assets/IMG_0576.png'
import pic7 from '../../assets/IMG_0658.png'
import pic9 from '../../assets/IMG_0739.png'
import pic10 from '../../assets/IMG_0940.png'
import pic11 from '../../assets/IMG_0944.png'
import pic13 from '../../assets/IMG_0967.png'


export default function Extra () {
    return (
      <div className="extras">
        <img src={ before } alt="" className="bigpic"/><br/>
        <div className="text"> After a couple weeks of getting 
        swarmed by crane flies, my cousin and I started 
        seriously considering the idea of screening in their
        200 square foot porch. We discussed a variety of
        methods we could take and after discussing how we 
        could be the most efficient, we picked a day to get started.
        <img src={ wood } alt="" className="smallpic-v"/>
        Brimming with excitement, we triple-measured and wrote down
        exactly what we needed to buy on our first trip to Home Depot.
        We borrowed an SUV to go back and forth to the store and bought
        what we needed for our first section. <br/>
        <img src={ girls } alt="" className="smallpic-v2"/> <br/>

        This would normally be the part of the story where I tell you
        what an absolute mess it was... except it wasn't. Now, I'm not
        telling you that we are secretly Master Carpenters and it all
        went perfectly. Believe it or not, I even hammered myself a black eye.
        But with help from my aunt and two other cousins, a lot of
        patient Home Depot employees, and our iPhone calculators,
        we did it and we did it well. </div>
        
        <img src={ pic4 } alt="" className="pic"/>
        <img src={ pic5 } alt="" className="pic"/>
        <img src={ pic9 } alt="" className="pic"/>
        <img src={ pic10 } alt="" className="pic"/>
        <img src={ pic11 } alt="" className="pic"/>
        <img src={ pic7 } alt="" className="pic"/>
        <img src={ pic13 } alt="" className="bigpic"/>

        </div>
    );
  };