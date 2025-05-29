import React, { useContext } from "react";
import PlayPause from "./PlayPause";
import { PlayerContext } from "../context/PlayerContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TopChartsSkeleton from "../skeleton/TopChartsSkeleton";

const TopCharts = () => {
  const { topChartsSongs, albumsFetching, top10Fetching, playlistFetching } =
    useContext(PlayerContext);
  const { currentSongID, isPlaying } = useSelector((state) => state.player);

  if (top10Fetching || albumsFetching || playlistFetching) {
    return <TopChartsSkeleton />;
  }

  return (
    <section className="animate-left xl:w-[26rem] 2xl:w-[30rem]">
      <h1 className="pl-2 text-2xl font-bold text-white sm:pl-0 xl:pl-0">
        Top Charts
      </h1>
      <div>
        {topChartsSongs?.map((item, index) => (
          <div
            key={index}
            className={`mt-2 flex items-center justify-between rounded-lg px-2 py-2 text-white lg:hover:bg-[#4b456e] xl:px-4 2xl:pr-8 ${item.id === currentSongID && isPlaying ? "bg-[#4b456e]" : ""}`}
          >
            <div className="flex items-center gap-4">
              <p>{index + 1}.</p>
              <img
                className="w-12 rounded-lg lg:w-14 xl:w-12 2xl:w-13"
                src={`https://e-cdns-images.dzcdn.net/images/cover/${item?.md5_image}/1000x1000.jpg`}
                alt="topCharts"
              />
              <div>
                <Link to={`/song/${item.id}`}>
                  <h2 className="w-35 truncate text-sm font-bold sm:w-60 md:w-90 lg:w-150 xl:w-50 lg:text-base 2xl:text-lg">
                    {item?.title}
                  </h2>
                </Link>
                <Link to={`/artist/${item.artist.id}`}>
                  <h3 className="w-35 truncate text-xs text-gray-300 sm:w-60 md:w-90 lg:w-150 xl:w-50 lg:text-sm">
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
