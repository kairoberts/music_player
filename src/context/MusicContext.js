import React, { useState, useRef, createContext } from "react";
import Music from "../Music";

export const MusicContext = createContext();

export const MusicProvider = (props) => {
  const [songs, setSongs] = useState(Music());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        currentSong,
        setCurrentSong,
        audioRef,
        libraryStatus,
        setLibraryStatus,
        setSongs,
        songs,
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
};
