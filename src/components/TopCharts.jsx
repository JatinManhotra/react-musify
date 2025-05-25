import React, { useContext } from "react";
import PlayPause from "./PlayPause";
import { PlayerContext } from "../context/PlayerContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TopChartsSkeleton from "../skeleton/TopChartsSkeleton";

const TopCharts = () => {
  const { topChartsSongs, albumsFetching } = useContext(PlayerContext);
  const {currentSongID, isPlaying} = useSelector((state)=>state.player)

  if (albumsFetching) {
    return <TopChartsSkeleton />;
  }

  return (
    <section className="animate-left xl:w-[28rem]">
      <h1 className="text-2xl pl-2 xl:pl-0 font-bold text-white">Top Charts</h1>
      <div>
        {topChartsSongs?.map((item, index) => (
          <div
            key={index}
            className={`mt-2 flex items-center justify-between rounded-lg px-2 xl:px-4 py-2 xl:pr-8 text-white xl:hover:bg-[#4b456e] ${(item.id === currentSongID) && isPlaying ? "bg-[#4b456e]" : ""}`}
          >
            <div className="flex items-center gap-4">
              <p>{index + 1}.</p>
              <img
                className="w-12 xl:w-15 rounded-lg"
                src={`https://e-cdns-images.dzcdn.net/images/cover/${item?.md5_image}/1000x1000.jpg`}
                alt="topCharts"
              />
              <div>
                <Link to={`/song/${item.id}`}>
                  <h2 className="truncate text-sm xl:text-lg font-bold">{item?.title}</h2>
                </Link>
                <Link to={`/artist/${item.artist.id}`}>
                  <h3 className="truncate text-xs xl:text-sm text-gray-300">
                    {item?.artist?.name}
                  </h3>
                </Link>
              </div>
            </div>
            <PlayPause
              topCharts
              preview={item.preview}
              songID={item.id}
              songList={topChartsSongs}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCharts;
