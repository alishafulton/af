import React from "react";
import { Spotify } from "react-spotify-embed";


// blurb is my about me page content
// the text, and then my compliments

export default function Spotify2 () {
  return (
        <div className="w-full">
        <div className="flex flex-row gap-8 px-4 pt-4 pb-2 w-full ">
          <Spotify link="https://open.spotify.com/playlist/1GvMJmqjMIttENpQpH68MD?si=e83766c8fd694dbf" />
        </div></div>
  );
}