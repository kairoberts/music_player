import React, { useReducer } from "react";
import MusicContext from "./musicContext";
import MusicReducer from "./MusicReducer";
import { PLAY_SONG } from "../types";

const MusicState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(MusicReducer, initialState);

  // Play Song

  // Get Time

  // Drag Music

  // Update Time

  // Skip Songs

  // Reset Last Song

  return (
    <MusicContext.Provider
      value={{
        isPlaying: state.isPlaying,
        audioRef: state.audioRef,
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicState;
