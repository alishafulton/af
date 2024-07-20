import React from "react"
import { type HTMLAttributes } from "react";

interface ChannelProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any

  link: string
  wide?: boolean
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allow?: string
}

export const ChannelPrototypeAnd = ({
    link,
    style = {},
  
    width = 900,
    height = 650,
    frameBorder = 1,
    allow = "encrypted-media",

  }: ChannelProps) => {


    return (
    
    <iframe 
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fh3kIgfl3znkN9dbk32kQCu%2FChannel---Android%3Fpage-id%3D0%253A1%26node-id%3D1-6567%26t%3DsIk5LJjvgxfgiiuD-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1%253A6567" 
    width={width}
    height={height}
    frameBorder={frameBorder}
    allow={allow}
  />
    
    
);


};