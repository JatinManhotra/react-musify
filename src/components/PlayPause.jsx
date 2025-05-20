import React, { useContext, useEffect, useState } from "react";
import { FaPause, FaPauseCircle, FaPlay, FaPlayCircle, FaStepBackward, FaStepForward } from "react-icons/fa";
import { useSelector } from "react-redux";
import { PlayerContext } from "../context/PlayerContext";
import { setPlaying } from "../redux/slice/playerSlice";


const PlayPause = ({ songCard, preview, songID, topCharts, songList }) => {

  const { isPlaying, currentSongID } = useSelector((state) => state.player);
  const isClickedSongPlaying = isPlaying && currentSongID === songID;
  const {togglePlay, playPrevious, playNext} = useContext(PlayerContext)


  return (
    <>
    {
      songCard || topCharts ? 
      <div
      className={`${songCard ? "absolute top-0  right-0 bottom-0 left-0 rounded-lg hover:bg-black/50" : " "} ${isClickedSongPlaying ? "bg-black/50  " : " "} ${topCharts ?"bg-transparent  " :  "  "}`}
    >
      <div
        className={`${songCard ? "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover:opacity-100 hover:cursor-pointer" : ""} ${isClickedSongPlaying ? "opacity-100" : ""}`}
      >
        {isClickedSongPlaying ? (
          <FaPauseCircle size={30} onClick={() => togglePlay(preview, songID, songList)} />
        ) : (
          <FaPlayCircle size={30} onClick={() => togglePlay(preview, songID, songList)} />
        )}
      </div>
    </div>
    : <div className="hover:cursor-pointer flex items-center gap-6 text-2xl">
      <div className='group flex flex-col items-center'>
        <FaStepBackward onClick={playPrevious} className="cursor-pointer"/>
        <p className='player-controls-tooltip'>Previous</p>
      </div>
        {
          isPlaying ? 
        <div className='group flex flex-col items-center'>
            <FaPause className="text-5xl border border-white p-2 rounded-full" onClick={togglePlay} /> 
              <p className='player-controls-tooltip top-15'>Pause</p>
          </div>
          :
         <div className='group flex flex-col items-center'>
            <FaPlay className="text-5xl border border-white p-2 rounded-full" onClick={togglePlay} />
              <p className='player-controls-tooltip top-15'>Play</p>
          </div>
        }
       <div className='group flex flex-col items-center'>
          <FaStepForward onClick={playNext} className="cursor-pointer" />
          <p className='player-controls-tooltip'>Next</p>
        </div>
      </div>
    }
    </>
  );
};

export default PlayPause;
