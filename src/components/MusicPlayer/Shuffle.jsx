import React, { useContext, useEffect, useState } from "react";
import { FaShuffle } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { PlayerContext } from "../../context/PlayerContext";
import { setPlaying, setPreviewUrl } from "../../redux/slice/playerSlice";

const Shuffle = () => {
  const { isPlaying, currentSongID, previewUrl, currentSongsList } =
    useSelector((state) => state.player);

  const { audioRef, dispatch, showMsg, setShowMsg } = useContext(PlayerContext);
  const [isShuffle, setIsShuffle] = useState(false);
  const [showShuffleMsg, setShowShuffleMsg] = useState(false);

  function handleToggle() {
    setIsShuffle((prev) => !prev);
    setShowShuffleMsg(true);

    setTimeout(() => {
      setShowShuffleMsg(false);
    }, 1200);
  }

  useEffect(() => {
    if (
      !audioRef.current ||
      !previewUrl ||
      !currentSongID ||
      !isPlaying ||
      !currentSongsList?.length
    )
      return;

    if (isShuffle) {
      function randomSongs() {
        let nextIndex;
        let currentIndex = currentSongsList.findIndex(
          (song) => song.id === currentSongID,
        );

        do {
          nextIndex = Math.floor(Math.random() * currentSongsList.length);
        } while (nextIndex === currentIndex && currentSongsList.length > 1);

        const nextSong = currentSongsList[nextIndex];

        console.log(nextIndex);

        if (nextSong) {
          dispatch(setPlaying({ isPlaying: true, songID: nextSong.id }));
          dispatch(setPreviewUrl(nextSong.preview));
          audioRef.current.src = nextSong.preview;
          //   audioRef.current.play();
        }
      }

      audioRef.current.addEventListener("ended", randomSongs);

      return () => {
        audioRef.current.removeEventListener("ended", randomSongs);
      };
    }
  }, [
    audioRef,
    isPlaying,
    currentSongID,
    previewUrl,
    isShuffle,
    currentSongsList,
  ]);

  return (
    <div className="group flex flex-col items-center">
      <FaShuffle
        onClick={handleToggle}
        className={`${isShuffle ? "text-rose-400" : "text-white"} cursor-pointer`}
      />
      <div
        className={`player-controls-tooltip ${showShuffleMsg ? "opacity-100" : "opacity-0"}`}
      >
        <h3>
          Shuffle <span className="text-rose-400">{isShuffle ? "On" : "Off"}</span>
        </h3>
      </div>
    </div>
  );
};

export default Shuffle;
