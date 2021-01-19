import { PLAY_SONG } from "../types";

const musicReducer = (state, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        isPlaying: true,
      };
    default:
      return state;
  }
};

export default musicReducer;
