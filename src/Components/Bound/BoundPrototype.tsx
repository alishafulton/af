import React from "react"
import { type HTMLAttributes } from "react";

interface BoundProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any

  link: string
  wide?: boolean
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allow?: string
}

export const BoundPrototype = ({
    link,
    style = {},
  
    width = 900,
    height = 650,
    frameBorder = 1,
    allow = "encrypted-media",

  }: BoundProps) => {


    return (
    
    <iframe 
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6qN9WFCdBbpowtNV9vJwQ1%2Fbound%3Fpage-id%3D5%253A2%26node-id%3D453-34027%26starting-point-node-id%3D474%253A35060%26t%3DvMPeVuUw8dw5Z00Z-1" 
    width={width}
    height={height}
    frameBorder={frameBorder}
    allow={allow}
  />
    
    
);


};