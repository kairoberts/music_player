import React, { useContext } from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MusicContext } from "../context/MusicContext";

const Nav = () => {
  const { libraryStatus, setLibraryStatus } = useContext(MusicContext);
  return (
    <nav>
      <h1>Roberts Radio</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library <BsMusicNoteBeamed />
      </button>
    </nav>
  );
};

export default Nav;
