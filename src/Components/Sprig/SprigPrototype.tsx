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
  
    width = 810,
    height = 600,
    frameBorder = 1,
    allow = "encrypted-media",

  }: SprigProps) => {
    const url = new URL(link);
    url.pathname = url.pathname.replace(/\/intl-\w+\//, "/");


    return (
    <>
    <iframe 
    src={`https://www.figma.com/embed${url.pathname}`}
    width={width}
    height={height}
    frameBorder={frameBorder}
    allow={allow}
  />
    </>
    
);

};