import React from "react"

// prototypes from figma were a little tricky
// thankfully they come with embed codes which work nicely
// but when its displayed there is only so much you can see
// so we change the width so more is visible 
// in different screen aspect ratios


export default function CoastPrototype () {
    return (

<div className="flex w-full h-auto justify-items-center justify-center my-4">

<div className="flex flex-col mx-12 w-full justify-center justify-items-center justify-self-center ">
<iframe className="h-72 md:h-500 "
src="https://embed.figma.com/proto/n1MAVIcv7nkcqeTpwo0CpA/3.3--Primary-%26-Secondary-Actions?page-id=0%3A44&node-id=1118-714&node-type=canvas&viewport=362%2C550%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1118%3A696&embed-host=share" />

<div className="flex justify-center justify-items-center"><div className=" flex justify-center justify-items-center justify-self-center w-1/3 px-2 py-2 my-2 rounded-sm bg-black hover:bg-red-400 font-mono text-white text-xs tracking-tighter">
<a href="https://embed.figma.com/proto/n1MAVIcv7nkcqeTpwo0CpA/3.3--Primary-%26-Secondary-Actions?page-id=0%3A44&node-id=1118-714&node-type=canvas&viewport=362%2C550%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1118%3A696&embed-host=share">
open in a new window</a>
</div>
</div>
</div>
</div>
    
);

};