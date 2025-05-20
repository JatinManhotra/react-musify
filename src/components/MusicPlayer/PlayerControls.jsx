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

  const { audioRef, dispatch, playNext } = useContext(PlayerContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isRepeated, setIsRepeated] = useState(false)

  function handleSeek(e){
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime
    setCurrentTime(seekTime);
    audioRef.current.play();
    dispatch(setPlaying({ isPlaying: true, songID: currentSongID }));

   }

  useEffect(() => {
    if (!audioRef.current || !previewUrl || !currentSongID || !isPlaying)
      return;

    if(isRepeated){
      audioRef.current.loop = true;
    }else{
      audioRef.current.loop = false
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
      if(audioRef.current.currentTime === audioRef.current.duration){
      dispatch(setPlaying({ isPlaying: false, songID: currentSongID }));
      setCurrentTime(0);
      audioRef.current.currentTime = 0;
     }
     }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2)
      audioRef.current.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [audioRef, isPlaying, currentSongID, previewUrl, isRepeated]);

  return (
    <>
    <div className="flex flex-col-reverse gap-3 items-center justify-center flex-1 w-full">
      <div className="text-white items-center flex gap-2">
      <p>0:{audioRef.current && ((Math.round(audioRef.current.currentTime)) < 10 ? "0" + Math.round(audioRef.current.currentTime) : Math.round(audioRef.current.currentTime))}</p>
    <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        name="progress-bar"
        id="progress-bar"
        className="w-[30rem] custom-range"
      />
      <p>0:{audioRef.current && (Math.round(audioRef.current.duration))}</p>
    </div>

    <div className="text-white flex items-center text-xl gap-6">
      <Loop currentTime={currentTime} setCurrentTime={setCurrentTime}/>
      <div className='group flex flex-col items-center'>
        <FaRepeat onClick={()=>setIsRepeated(!isRepeated)} className={`${isRepeated ? "text-rose-500" : "text-white"} cursor-pointer`}/>
          <p className='player-controls-tooltip'>{isRepeated ? "Repeat On" : "Repeat Off"}</p>
      </div>
      <PlayPause/>
      <Shuffle/>
    </div>
    </div>
    </>
   
  );
};

export default PlayerControls;
