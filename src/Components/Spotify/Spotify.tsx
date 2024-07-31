import { type HTMLAttributes } from "react";

interface SpotifyProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any

  link: string
  width?: number | string
  frameBorder?: number | string
  allow?: string
}

export const Spotify = ({
  link,
  style = {},
  frameBorder = 0,
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
      style={{
        borderRadius: 8,
        ...style
      }}
      {...props}
    />
  );
};