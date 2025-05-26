import React from "react";
import PlayPause from "./PlayPause";
import { Link, useParams } from "react-router-dom";
import SongCardSkeleton from "../skeleton/SongCardSkeleton";
import { useSelector } from "react-redux";

const SongCard = ({
  image,
  title,
  artist,
  index,
  album,
  playlist,
  preview,
  songID,
  songList,
  song,
  albumId,
  playlistId,
  artistId,
  strictWidth,
}) => {
  let route = null;
  if (song) route = `/song/${songID}`;
  else if (album) route = `/album/${albumId}`;
  else route = `/playlist/${playlistId}`;



  return (
    <div
      key={index}
      className={`${strictWidth ? "max-w-[12rem] xl:max-w-[15rem]" : "min-w-[12rem] xl:min-w-[15rem]"} rounded-lg bg-[#1f235c] p-4 shadow-sm shadow-black/50 transition-transform duration-200  xl:hover:scale-105 `}
    >
      <div className="group relative">
        <img
          draggable="false"
          src={
            album || playlist
              ? image
              : `https://e-cdns-images.dzcdn.net/images/cover/${image}/1000x1000.jpg`
          }
          alt="songImg"
          className="h-[10rem] w-[10rem] xl:h-[14rem] xl:w-[14rem] rounded-lg object-cover"
        />
        {album || playlist ? null : (
          <PlayPause
            songID={songID}
            preview={preview}
            songCard
            songList={songList}
          />
        )}
      </div>

      {route ? (
        <Link
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          to={route}
          className="select-none"
        >
          <h2 className="mt-4 truncate text-sm xl:text-base font-bold text-gray-300 select-none hover:cursor-pointer">
            {title}
          </h2>
        </Link>
      ) : null}

      <Link
        to={`/artist/${artistId}`}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="select-none"
      >
        <h3 className="truncate text-xs xl:text-sm text-gray-400 select-none hover:cursor-pointer">
          {artist}
        </h3>
      </Link>
    </div>
  );
};

export default SongCard;
