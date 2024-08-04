import { type HTMLAttributes } from "react";

// had to get this one from the internet 
// cause i could not get this to embed the way i wanted 
// under the return is the html component 

// would love some help or info on this component 

interface SpotifyProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any

  link: string
  wide?: boolean
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allow?: string
}

export const Spotify = ({
  link,
  style = {},
  frameBorder = 0,
  width=800,
  height=800,
  allow = "encrypted-media",
  ...props
}: SpotifyProps) => {
  const url = new URL(link);
  // https://open.spotify.com/playlist/1GvMJmqjMIttENpQpH68MD?si=e83766c8fd694dbf
  // Remove any additional path segments
  url.pathname = url.pathname.replace(/\/intl-\w+\//, "/");
  return (
    <iframe
      title="Spotify Web Player"
      src={`https://open.spotify.com/embed${url.pathname}`}
      frameBorder={frameBorder}
      allow={allow}
      width={width}
      height={height}
      style={{
        borderRadius: 8,
        ...style
      }}
      {...props}
    />
  );
};