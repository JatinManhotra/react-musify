import React, { useContext, useEffect, useState } from "react";
import {
  FaPause,
  FaPauseCircle,
  FaPlay,
  FaPlayCircle,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { PlayerContext } from "../context/PlayerContext";
import { setPlaying } from "../redux/slice/playerSlice";

const PlayPause = ({
  songCard,
  preview,
  songID,
  topCharts,
  songList,
  rounded,
}) => {
  const { isPlaying, currentSongID } = useSelector((state) => state.player);
  const isClickedSongPlaying = isPlaying && currentSongID === songID;
  const { togglePlay, playPrevious, playNext } = useContext(PlayerContext);

  return (
    <>
      {songCard || topCharts ? (
        <div
          className={`${songCard ? "absolute top-0 right-0 bottom-0 left-0 hover:bg-black/50" : " "} ${isClickedSongPlaying ? "bg-black/50" : " "} ${topCharts ? "cursor-pointer bg-transparent" : " "} ${rounded ? "rounded-full" : "rounded-lg"}`}
        >
          <div
            className={`${songCard ? "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white group-hover:opacity-100 hover:cursor-pointer lg:opacity-0" : ""} ${isClickedSongPlaying ? "opacity-100" : ""}`}
          >
            {isClickedSongPlaying ? (
              <FaPauseCircle
                size={30}
                onClick={() => togglePlay(preview, songID, songList)}
              />
            ) : (
              <FaPlayCircle
                size={30}
                onClick={() => togglePlay(preview, songID, songList)}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4 text-xl hover:cursor-pointer xl:gap-6 xl:text-2xl">
          <div className="group flex flex-col items-center">
            <FaStepBackward onClick={playPrevious} className="cursor-pointer" />
            
          </div>
          {isPlaying ? (
            <div className="group flex flex-col items-center">
              <FaPause
                className="rounded-full border border-white p-1.5 text-4xl sm:p-2 sm:text-5xl xl:text-5xl"
                onClick={togglePlay}
              />
              
            </div>
          ) : (
            <div className="group flex flex-col items-center">
              <FaPlay
                className="rounded-full border border-white p-1.5 text-4xl sm:p-2 sm:text-5xl xl:text-5xl"
                onClick={togglePlay}
              />
              
            </div>
          )}
          <div className="group flex flex-col items-center">
            <FaStepForward onClick={playNext} className="cursor-pointer" />
            
          </div>
        </div>
      )}
    </>
  );
};

export default PlayPause;
