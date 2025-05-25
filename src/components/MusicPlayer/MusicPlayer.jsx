import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PlayerControls from "./PlayerControls";
import VolumeControl from "./VolumeControl";
import { PlayerContext } from "../../context/PlayerContext";
import { CiMinimize1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const MusicPlayer = () => {
  const { audioRef } = useContext(PlayerContext);
  const { isPlaying, previewUrl, currentSongsList, currentSongID } =
    useSelector((state) => state.player);
  const currentPlayingSong = currentSongsList?.find(
    (song) => song.id === currentSongID,
  );
  const [hidePlayer, setHidePlayer] = useState(true);

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

  useEffect(() => {
    if (!isPlaying || !currentSongID) return;
    setHidePlayer(false);
  }, [isPlaying, currentSongID]);

  // console.log(hidePlayer)

  return (
    <section
      className={`${hidePlayer ? "hidden" : "flex"} animate-up fixed right-0 bottom-0 left-0 z-10 h-28 justify-between rounded-t-3xl bg-gradient-to-br from-white/10 to-[#2a2a80] px-6 backdrop-blur-lg`}
    >
      {previewUrl && <audio ref={audioRef} src={previewUrl} />}

      <div className=" w-full hidden xl:flex xl:max-w-[20rem] items-center gap-4">
        {currentPlayingSong && (
          <img
            src={`https://e-cdns-images.dzcdn.net/images/cover/${currentPlayingSong.md5_image}/1000x1000.jpg
        `}
            alt={currentPlayingSong?.title}
            className="rotate-song-img h-16 w-16 rounded-full"
            style={{
              animationPlayState: isPlaying ? "running" : "paused",
            }}
          />
        )}
        <div className="max-w-50">
          <Link to={`/song/${currentPlayingSong?.id}`}>
            <h2 className="truncate font-bold text-gray-300 hover:cursor-pointer">
              {currentPlayingSong?.title}
            </h2>
          </Link>
          <Link to={`/artist/${currentPlayingSong?.artist?.id}`}>
            <h3 className="truncate text-sm text-gray-400 hover:cursor-pointer">
              {currentPlayingSong?.artist?.name}
            </h3>
          </Link>
        </div>
      </div>

      <PlayerControls />

      {/* <VolumeControl /> */}
      <CiMinimize1
        onClick={() => setHidePlayer(true)}
        className="absolute top-3 right-5 cursor-pointer text-xl text-white"
      />
    </section>
  );
};

export default MusicPlayer;
