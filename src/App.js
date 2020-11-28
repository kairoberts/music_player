import React, { useState, useRef } from "react";
import "./styles/style.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Data from "./Music";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""} `}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
