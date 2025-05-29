import React, { useContext } from "react";
import { setDragging } from "../redux/slice/playerSlice";
import { PlayerContext } from "../context/PlayerContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TopArtistsSkeleton from "../skeleton/TopArtistsSkeleton";

const TopArtists = () => {
  const {
    scrollableDivRef4,
    dragDiv,
    dispatch,
    dragging,
    albumsFetching,
    top10Fetching,
    playlistFetching,
  } = useContext(PlayerContext);
  const artistData = useSelector((state) => state.player.artistData);

  if (top10Fetching || albumsFetching || playlistFetching) {
    return <TopArtistsSkeleton />;
  }

  return (
    artistData && (
      <section className="animate-left mt-5 p-2 xl:w-[26rem] 2xl:w-[30rem]">
        <h1 className="text-2xl font-bold text-white">Top Artists</h1>
        <div
          ref={scrollableDivRef4}
          onMouseMove={(e) => dragDiv(e, scrollableDivRef4)}
          onMouseDown={() => dispatch(setDragging(true))}
          className={`hide-scrollbar mt-4 flex h-40 items-start gap-5 overflow-x-scroll select-none md:h-43 xl:h-40 2xl:h-42 ${dragging ? "cursor-grab" : "cursor-default"}`}
        >
          {artistData?.map((item, index) => (
            <div
              key={index}
              className="group h-20 w-20 shrink-0 md:h-23 md:w-23 lg:h-25 lg:w-25"
            >
              <Link
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="select-none"
                to={`/artist/${item.id}`}
              >
                <img
                  draggable="false"
                  src={item?.picture_xl}
                  alt="artistImg"
                  className="cursor-pointer rounded-full object-cover"
                />
              </Link>
              <p className="mt-2 text-center text-sm whitespace-nowrap text-white transition-all duration-500 ease-in-out lg:translate-y-[-1.25rem] lg:text-base lg:opacity-0 lg:group-hover:translate-y-[0] lg:group-hover:opacity-100">
                {item?.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  );
};

export default TopArtists;
