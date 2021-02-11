import React, { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

const Song = () => {
  const { isPlaying, currentSong } = useContext(MusicContext);
  return (
    <div className="song-container">
      {isPlaying === false ? (
        <img
          src={currentSong.cover}
          className="artist-image"
          alt={currentSong.name}
        />
      ) : (
        <img
          src={currentSong.cover}
          className="artist-image-large"
          alt={currentSong.name}
        />
      )}
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
