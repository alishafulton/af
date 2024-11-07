import React from "react"

// prototypes from figma were a little tricky
// thankfully they come with embed codes which work nicely
// but when its displayed there is only so much you can see
// so we change the width so more is visible 
// in different screen aspect ratios


export default function SprigPrototype () {
    return (

<div className="flex w-full h-auto justify-items-center justify-center my-4">

<div className="flex flex-col mx-12 w-full justify-center justify-items-center justify-self-center ">
<iframe className="h-80 md:h-500 "
src="https://embed.figma.com/proto/4Sc1LEgwnnOIf8Z31dkYtD/SPRIG?page-id=34%3A2&node-id=230-347&node-type=frame&viewport=591%2C179%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=230%3A345&embed-host=share" />

<div className="flex justify-center justify-items-center"><div className=" flex justify-center justify-items-center justify-self-center w-1/2 md:w-1/3 px-2 py-2 my-2 rounded-sm bg-black hover:bg-red-800 font-mono text-white text-xs tracking-tighter">
<a href="https://www.figma.com/proto/4Sc1LEgwnnOIf8Z31dkYtD/SPRIG?page-id=34%3A2&node-id=230-347&node-type=canvas&viewport=334%2C-659%2C0.36&t=q7QXchFV2Yon6Rw0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=230%3A345" target="_blank">
open in a new window</a>
</div>
</div>
</div>
</div>
    
);

};