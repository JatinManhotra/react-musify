import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PlayerContext } from "../../context/PlayerContext";
import { setPlaying, setPreviewUrl } from "../../redux/slice/playerSlice";
import { RxLoop } from "react-icons/rx";
import { ImLoop } from "react-icons/im";

const Loop = ({ currentTime, setCurrentTime }) => {
  const { isPlaying, currentSongID, previewUrl, currentSongsList } =
    useSelector((state) => state.player);

  const { audioRef, dispatch, showMsg, setShowMsg } = useContext(PlayerContext);
  const [isLoop, setIsLoop] = useState(false);
  const [showLoopMsg, setShowLoopMsg] = useState(false);

  useEffect(() => {
    if (
      !audioRef.current ||
      !previewUrl ||
      !currentSongID ||
      !isPlaying ||
      !currentSongsList?.length
    )
      return;

    if (isLoop) {
      const handleEnded = () => {
        const currentIndex = currentSongsList.findIndex(
          (song) => song.id === currentSongID,
        );

        const nextIndex = (currentIndex + 1) % currentSongsList.length;
        const nextSong = currentSongsList[nextIndex];

        if (nextSong) {
          dispatch(setPlaying({ isPlaying: true, songID: nextSong.id }));
          dispatch(setPreviewUrl(nextSong.preview));
        }
      };

      audioRef.current.addEventListener("ended", handleEnded);

      return () => {
        audioRef.current.removeEventListener("ended", handleEnded);
      };
    }

    const interval = setInterval(() => {
      if (audioRef.current.currentTime === audioRef.current.duration) {
        dispatch(setPlaying({ isPlaying: false, songID: currentSongID }));
        setCurrentTime(0);
        audioRef.current.currentTime = 0;
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [
    audioRef,
    isPlaying,
    currentSongID,
    previewUrl,
    isLoop,
    currentSongsList,
  ]);

  function handleToggle() {
    setIsLoop(prev => !prev);
    setShowLoopMsg(true)

    setTimeout(() => {
      setShowLoopMsg(false);
    }, 1200);
  }

  return (
    <div className="group flex flex-col items-center">
      <ImLoop
        onClick={handleToggle}
        className={`${isLoop ? "text-rose-400" : "text-white"} cursor-pointer`}
      />

      <div
        className={`player-controls-tooltip ${showLoopMsg ? "opacity-100" : "opacity-0"}`}
      >
        <h3>
           Loop <span className="text-rose-400">{isLoop ? "On" : "Off"}</span>
        </h3>
      </div>
    </div>
  );
};

export default Loop;
