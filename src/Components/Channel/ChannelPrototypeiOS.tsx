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

export const ChannelPrototypeiOS = ({
    width = 890,
    height = 650,
    frameBorder = 1,
    allow = "encrypted-media",

  }: ChannelProps) => {


    return (
    
    <iframe 
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FsAbUWT1hu2uos2b3MKKJO8%2FChannel%3Fpage-id%3D0%253A1%26node-id%3D25-10147%26viewport%3D805%252C467%252C0.3%26t%3DWq1OimPb36q92G2X-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D25%253A10147" 
    width={width}
    height={height}
    frameBorder={frameBorder}
    allow={allow}
  />
    
    
);


};