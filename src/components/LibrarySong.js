import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
  setSongs,
}) => {
  // setting the song
  const songHandler = async () => {
    await setCurrentSong(song);
    // checking the active song
    const activeSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(activeSong);
    // if the song isn't loaded, wait a few seconds
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songHandler}
      className={`library-songs ${song.active ? "selected" : " "}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
