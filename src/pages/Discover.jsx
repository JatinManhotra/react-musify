import React, { useContext } from "react";
import SongCard from "../components/SongCard";
import { setDragging } from "../redux/slice/playerSlice";
import { PlayerContext } from "../context/PlayerContext";
import { useSelector } from "react-redux";
import SongCardSkeleton from "../skeleton/SongCardSkeleton";
import DiscoverSkeleton from "../skeleton/DiscoverSkeleton";
import ErrorPage from "./ErrorPage";

const Discover = () => {
  const {
    albums,
    top10data,
    top10Fetching,
    top10Error,
    albumsError,
    playlistError,
    scrollableDivRef1,
    scrollableDivRef2,
    scrollableDivRef3,
    dragDiv,
    dragging,
    dispatch,
    playlistData,
    playlistFetching,
    albumsFetching,
  } = useContext(PlayerContext);

  // console.log(albums)

  if (top10Fetching || albumsFetching || playlistFetching) {
    return <DiscoverSkeleton />;
  }

  if (top10Error || albumsError || playlistError) {
    return <ErrorPage />;
  }

  return (
    <section className="hide-scrollbar animate-left mt-5 overflow-y-scroll px-4 sm:ml-[13rem] sm:w-[66%] sm:px-0 md:w-[71%] lg:w-[79%] xl:absolute xl:top-20 xl:left-55 xl:ml-0 xl:h-[calc(100vh_-_7rem)] xl:w-[49%] 2xl:w-[50%]">
      <h1 className="text-2xl font-bold text-white 2xl:text-3xl">Discover</h1>
      <div
        ref={scrollableDivRef1}
        onMouseMove={(e) => dragDiv(e, scrollableDivRef1)}
        onMouseDown={() => dispatch(setDragging(true))}
        className={`hide-scrollbar mb-5 flex shrink-0 gap-3 overflow-x-scroll py-4 select-none lg:gap-5 ${dragging ? "cursor-grab" : "cursor-default"}`}
      >
        {top10data?.data?.map((item, index) => (
          <SongCard
            key={item?.id || index}
            image={item?.md5_image}
            title={item?.title}
            artist={item?.artist?.name}
            artistId={item.artist.id}
            index={index}
            preview={item?.preview}
            songID={item?.id}
            songList={top10data.data}
            song
            isFetching={top10Fetching}
            error={top10Error}
          />
        ))}
      </div>

      <h1 className="text-2xl font-bold text-white 2xl:text-3xl">
        Popular Albums
      </h1>
      <div
        ref={scrollableDivRef2}
        onMouseMove={(e) => dragDiv(e, scrollableDivRef2)}
        onMouseDown={() => dispatch(setDragging(true))}
        className={`hide-scrollbar mb-5 flex shrink-0 gap-3 overflow-x-scroll py-4 select-none lg:gap-5 ${dragging ? "cursor-grab" : "cursor-default"}`}
      >
        {albums?.map((item, index) => (
          <SongCard
            key={item?.id || index}
            image={item?.album?.cover_xl}
            title={item?.album?.title}
            artist={item?.artist?.name}
            artistId={item?.artist?.id}
            albumId={item?.album?.id}
            index={index}
            album
          />
        ))}
      </div>

      <h1 className="text-2xl font-bold text-white 2xl:text-3xl">
        Check out playlists!
      </h1>
      <div
        ref={scrollableDivRef3}
        onMouseMove={(e) => dragDiv(e, scrollableDivRef3)}
        onMouseDown={() => dispatch(setDragging(true))}
        className={`hide-scrollbar mb-5 flex shrink-0 gap-3 overflow-x-scroll py-4 select-none lg:gap-5 ${dragging ? "cursor-grab" : "cursor-default"}`}
      >
        {playlistData?.map((item, index) => (
          <div
            key={item?.id || index}
            className="min-w-[12rem] 2xl:min-w-[14rem]"
          >
            <SongCard
              image={item?.picture_xl}
              title={item?.title}
              index={index}
              playlistId={item?.id}
              playlist
              strictWidth
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discover;
