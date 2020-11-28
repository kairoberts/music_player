import React from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
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
