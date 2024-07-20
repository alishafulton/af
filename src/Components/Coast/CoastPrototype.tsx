import React from "react"
import { type HTMLAttributes } from "react";

interface CoastProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any

  link: string
  wide?: boolean
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allow?: string
}

export const CoastPrototype = ({
    link,
    style = {},
  
    width = 900,
    height = 650,
    frameBorder = 1,
    allow = "encrypted-media",

  }: CoastProps) => {


    return (
    
    <iframe 
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fn1MAVIcv7nkcqeTpwo0CpA%2F3.3--Primary-%2526-Secondary-Actions%3Fpage-id%3D0%253A44%26node-id%3D1118-714%26viewport%3D684%252C531%252C0.18%26t%3DE4LyJHnr7f3kuQ4t-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1118%253A696" 
    width={width}
    height={height}
    frameBorder={frameBorder}
    allow={allow}
  />
    
    
);


};