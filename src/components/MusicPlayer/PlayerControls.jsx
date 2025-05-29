import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import PlayPause from "../PlayPause";
import { useSelector } from "react-redux";
import { setPlaying, setPreviewUrl } from "../../redux/slice/playerSlice";
import Loop from "./Loop";
import { FaRepeat } from "react-icons/fa6";
import Shuffle from "./Shuffle";

const PlayerControls = () => {
  const { isPlaying, currentSongID, previewUrl } = useSelector(
    (state) => state.player,
  );

  const { audioRef, dispatch, showMsg, setShowMsg } = useContext(PlayerContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isRepeated, setIsRepeated] = useState(false);
  const [showRepeatMsg, setShowRepeatMsg] = useState(false);

  function handleSeek(e) {
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
    audioRef.current.play();
    dispatch(setPlaying({ isPlaying: true, songID: currentSongID }));
  }

  function handleToggle() {
    setIsRepeated((prev) => !prev);
    setShowRepeatMsg(true);

    setTimeout(() => {
      setShowRepeatMsg(false);
    }, 1200);
  }

  useEffect(() => {
    if (!audioRef.current || !previewUrl || !currentSongID || !isPlaying)
      return;

    if (isRepeated) {
      audioRef.current.loop = true;
    } else {
      audioRef.current.loop = false;
    }

    function updateCurrentTime() {
      setCurrentTime(audioRef.current.currentTime);
    }

    function setAudioDuration() {
      setDuration(audioRef.current.duration);
    }

    const interval = setInterval(updateCurrentTime, 500);

    audioRef.current.addEventListener("loadedmetadata", setAudioDuration);

    const interval2 = setInterval(() => {
      if (audioRef.current.currentTime === audioRef.current.duration) {
        dispatch(setPlaying({ isPlaying: false, songID: currentSongID }));
        setCurrentTime(0);
        audioRef.current.currentTime = 0;
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      audioRef.current.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [audioRef, isPlaying, currentSongID, previewUrl, isRepeated]);

  return (
    <>
      <div className="flex w-[60%] flex-1 flex-col-reverse items-center justify-center gap-3 xl:gap-2 sm:pb-4 xl:w-full">
        <div className="flex items-center gap-2 text-white">
          <p className="text-xs xl:text-base">
            0:
            {audioRef.current &&
              (Math.round(audioRef.current.currentTime) < 10
                ? "0" + Math.round(audioRef.current.currentTime)
                : Math.round(audioRef.current.currentTime))}
          </p>
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            name="progress-bar"
            id="progress-bar"
            className="custom-range w-55 sm:w-[19rem] md:w-[23rem] lg:w-[25rem] xl:w-[30rem]"
          />
          <p className="text-xs xl:text-base">
            0:{audioRef.current && Math.round(audioRef.current.duration)}
          </p>
        </div>

        <div className="flex items-center gap-4 text-white sm:text-lg xl:gap-6 xl:text-xl">
          <Loop currentTime={currentTime} setCurrentTime={setCurrentTime} />
          <div className="group flex flex-col items-center">
            <FaRepeat
              onClick={handleToggle}
              className={`${isRepeated ? "text-rose-400" : "text-white"} cursor-pointer`}
            />

            <div
              className={`player-controls-tooltip ${showRepeatMsg ? "opacity-100" : "opacity-0"}`}
            >
              <h3>
                Repeat{" "}
                <span className="text-rose-400">
                  {isRepeated ? "On" : "Off"}
                </span>
              </h3>
            </div>
          </div>
          <PlayPause />
          <Shuffle />
        </div>
      </div>
    </>
  );
};

export default PlayerControls;
