import React from 'react';
import sprig1 from './../../assets/sprig1.png';
import sprig2 from './../../assets/sprig2.png';
import SprigPrototype from './SprigPrototype';

// i imported all of my sections of my portfolio
// separately as components 
// all have prototypes in them


export default function Sprig () {
    return (
        <div className="flex-col max-w-4xl justify-items-center ">
<img src = {sprig1} alt="" />
<SprigPrototype/>

<img src = {sprig2} alt="" />
</div>
    );
};


