import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PlayerControls from "./PlayerControls";
import VolumeControl from "./VolumeControl";
import { PlayerContext } from "../../context/PlayerContext";
import { CiMinimize1 } from "react-icons/ci";

const MusicPlayer = () => {
  const { audioRef } = useContext(PlayerContext);
  const { isPlaying, previewUrl, currentSongsList, currentSongID } = useSelector(
    (state) => state.player,
  );
  const currentPlayingSong = currentSongsList?.find(
    (song) => song.id === currentSongID,
  );
  const [hidePlayer, setHidePlayer] = useState(true)

  // console.log(currentSongsList)


  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((error) => console.log("Couldn't play song", error));
    } else {
      audioRef.current.pause();
    }
    // console.log(isPlaying)
  }, [isPlaying, previewUrl]);

  useEffect(()=>{
    if(!isPlaying || !currentSongID) return;
    setHidePlayer(false)
  },[isPlaying,currentSongID])

  // console.log(hidePlayer)

  return (
    <section className={`${hidePlayer ? "hidden" : "flex"} fixed right-0 bottom-0 left-0 h-28 bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10  justify-between px-6 animate-up`}>

      {previewUrl && <audio ref={audioRef} src={previewUrl} />}

        <div className="flex gap-4 items-center max-w-[20rem] w-full">
        {currentPlayingSong && (
          <img
            src={`https://e-cdns-images.dzcdn.net/images/cover/${currentPlayingSong.md5_image}/1000x1000.jpg
        `}
            alt={currentPlayingSong?.title}
            className="h-16 w-16 rounded-full rotate-song-img"
            style={{
                animationPlayState : isPlaying ? "running" : "paused"
            }}
          />
        )}
        <div className="max-w-50">
          <h2 className="truncate font-bold text-gray-300 hover:cursor-pointer">
            {currentPlayingSong?.title}
          </h2>
          <h3 className="truncate text-sm text-gray-400 hover:cursor-pointer">
            {currentPlayingSong?.artist?.name}
          </h3>
        </div>
      </div>
          

    <PlayerControls />

      <VolumeControl />
        <CiMinimize1 onClick={()=>setHidePlayer(true)}  className="absolute top-3 right-5 text-white text-xl cursor-pointer " />
    </section>
  );
};

export default MusicPlayer;
