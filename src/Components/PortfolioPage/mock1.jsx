import React from 'react';
import mock1 from "./../../assets/MOCK1.png";

export default function Mockup() {
    
    return (
        <>
            <img src={ mock1 } alt="" className="w-full h-full backdrop-filter hover:backdrop-blur-sm" />
        </>
    );
}