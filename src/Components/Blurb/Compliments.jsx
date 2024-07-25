import React from "react";
import s1 from "../../assets/starbucks1.png"
import s2 from "../../assets/starbucks2.png"
import s3 from "../../assets/starbucks3.png"
import s4 from "../../assets/starbucks4.png"


export default function Compliments () {
    return (
        <>
        <div className="flex py-2">
          <div className="flex"><img src={ s1 } alt=""/></div>
          <div className="flex"><img src={ s2 } alt=""/></div>
          <div className="flex"><img src={ s3 } alt="" /></div>
          <div className="flex"><img src={ s4 } alt="" /></div>
        </div>
        </>
    );
}