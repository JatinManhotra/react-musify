import React from "react";
import PlayPause from "./PlayPause";

const SongCard = ({ image, title, artist, index, album, playlist, preview, songID, songList }) => {

  return (
    <div
      key={index}
      className="min-w-[15rem] rounded-lg bg-[#1f235c] p-4 shadow-sm shadow-black/50 transition-transform duration-200 hover:scale-105"

    >
      <div className="relative group">
      <img
      
        draggable="false"
        src={
          album || playlist
            ? image
            : `https://e-cdns-images.dzcdn.net/images/cover/${image}/1000x1000.jpg`
        }
        alt="songImg"
        className="rounded-lg"
      />
      {album || playlist ? 
                null 
                : 
                <PlayPause songID={songID} preview={preview} songCard songList={songList}/>}
      </div>
      <h2 className="mt-4 truncate font-bold text-gray-300 hover:cursor-pointer">
        {title}
      </h2>
      <h3 className="truncate text-sm text-gray-400 hover:cursor-pointer">
        {artist}
      </h3>
    </div>
  );
};

export default SongCard;
