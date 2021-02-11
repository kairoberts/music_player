import React, { useState, useContext } from "react";
import { FiPlay } from "react-icons/fi";
import { AiOutlineLeft, AiOutlinePause, AiOutlineRight } from "react-icons/ai";
import { MusicContext } from "../context/MusicContext";

const Player = () => {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    songs,
    setCurrentSong,
    setSongs,
  } = useContext(MusicContext);

  // Updates the UI to active song when changed
  const libraryUpdater = (nextPrev) => {
    const activeSong = songs.map((song) => {
      if (song.id === nextPrev.id) {
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
  };

  // Handles whether the audio is playing or not
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // Breaks down the time into minutes rather than one number
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // Allows the input to be draggable alongside the time of song
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  // updates the ui to match where the song has been dragged
  const timeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
  };

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  // allows the songs to be skipped forwards and backwards
  const skipTrackHandler = async (direction) => {
    let songIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(songIndex + 1) % songs.length]);
      libraryUpdater(songs[(songIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((songIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        libraryUpdater(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(songIndex - 1) % songs.length]);
      libraryUpdater(songs[(songIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const trackAnimate = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const songEndHandler = async () => {
    let songIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(songIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnimate} className="animate-track" />
        </div>

        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <AiOutlineLeft
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size={50}
        />

        {isPlaying === true ? (
          <AiOutlinePause
            className="playpause-icons"
            size={50}
            onClick={playHandler}
          />
        ) : (
          <FiPlay className="playpause-icons" size={50} onClick={playHandler} />
        )}

        <AiOutlineRight
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size={50}
        />
      </div>
      <audio
        onTimeUpdate={timeHandler}
        onLoadedMetadata={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      />
    </div>
  );
};

export default Player;
