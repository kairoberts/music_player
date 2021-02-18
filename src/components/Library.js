import React, { useContext } from "react";
import LibrarySong from "./LibrarySong";
import { MusicContext } from "../context/MusicContext";

const Library = () => {
  const { libraryStatus, songs } = useContext(MusicContext);

  return (
    <div className={`library ${libraryStatus ? "active-library" : " "}`}>
      <h2>Library</h2>
      <div className="library-song">
        {songs.map((song) => (
          <LibrarySong song={song} id={song.id} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default Library;
