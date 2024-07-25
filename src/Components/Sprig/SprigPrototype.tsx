import React from "react"
import { type HTMLAttributes } from "react";

interface SprigProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any

  link: string
  frameBorder?: number | string
  allow?: string
}

export const SprigPrototype = ({
  }: SprigProps) => {

    return (
    <div className="flex h-60 m-3">
    <iframe 
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4Sc1LEgwnnOIf8Z31dkYtD%2FSPRIG%3Fpage-id%3D34%253A2%26node-id%3D230-347%26viewport%3D369%252C25%252C0.26%26t%3DHD5UMDuOwPQIH59t-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D230%253A345" 
    className="h-full w-full"
  /></div>
    
    
);


};