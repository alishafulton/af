import React from "react"
import { type HTMLAttributes } from "react";

interface SprigProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any

  link: string
  wide?: boolean
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allow?: string
}

export const SprigPrototype = ({
    link,
    style = {},
  
    width = 880,
    height = 650,
    frameBorder = 1,
    allow = "encrypted-media",

  }: SprigProps) => {


    return (
    
    <iframe 
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4Sc1LEgwnnOIf8Z31dkYtD%2FSPRIG%3Fpage-id%3D34%253A2%26node-id%3D230-347%26viewport%3D369%252C25%252C0.26%26t%3DHD5UMDuOwPQIH59t-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D230%253A345" 
    width={width}
    height={height}
    frameBorder={frameBorder}
    allow={allow}
  />
    
    
);


};