import React, { useContext } from "react";
import LibrarySong from "./LibrarySong";
import { MusicContext } from "../context/MusicContext";

const Library = () => {
  const { libraryStatus, songs, id } = useContext(MusicContext);

  return (
    <div className={`library ${libraryStatus ? "active-library" : " "}`}>
      <h2>Library</h2>
      <div className="library-song" key={id}>
        {songs.map((song) => (
          <LibrarySong song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
