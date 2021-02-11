import React from "react";
import "./styles/style.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import { MusicProvider } from "./context/MusicContext";

function App() {
  return (
    <MusicProvider>
      <Nav />
      <Song />
      <Player />
      <Library />
    </MusicProvider>
  );
}

export default App;
