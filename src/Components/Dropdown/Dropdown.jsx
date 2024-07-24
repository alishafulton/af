import { Link } from "react-router-dom";
import React from "react";

export default function Dropdown () {
        return (
<div className="flex justify-center">
        <div class="min-h-screen flex flex-row place-content-start tan-color font-serif">
        <div className="text-lg"><Link to="/af/"><h2>about me</h2></Link></div>
        <div className="text-lg"><Link to="/af/portfolio"><h2>portfolio</h2></Link></div>
        <div className="text-lg"><Link to="/af/contact"><h2>contact</h2></Link></div>
        </div>
</div>
        );
}