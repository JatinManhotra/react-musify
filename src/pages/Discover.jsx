import React, { useContext } from "react";
import SongCard from "../components/SongCard";
import { setDragging } from "../redux/slice/playerSlice";
import { PlayerContext } from "../context/PlayerContext";
import { useSelector } from "react-redux";
import SongCardSkeleton from "../skeleton/SongCardSkeleton";
import DiscoverSkeleton from "../skeleton/DiscoverSkeleton";

const Discover = () => {
  const {
    albums,
    top10data,
    top10Fetching,
    top10Error,
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

  return (
    <section className="hide-scrollbar animate-left mt-5 overflow-y-scroll px-4 xl:absolute xl:top-20 xl:left-55 xl:h-[87%] xl:w-[50%] xl:px-0">
      <h1 className="text-2xl font-bold text-white xl:text-3xl">Discover</h1>
      <div
        ref={scrollableDivRef1}
        onMouseMove={(e) => dragDiv(e, scrollableDivRef1)}
        onMouseDown={() => dispatch(setDragging(true))}
        className={`hide-scrollbar mb-5 flex shrink-0 gap-3 overflow-x-scroll py-4 select-none xl:gap-5 ${dragging ? "cursor-grab" : "cursor-default"}`}
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

      <h1 className="text-2xl font-bold text-white xl:text-3xl">
        Popular Albums
      </h1>
      <div
        ref={scrollableDivRef2}
        onMouseMove={(e) => dragDiv(e, scrollableDivRef2)}
        onMouseDown={() => dispatch(setDragging(true))}
        className={`hide-scrollbar mb-5 flex shrink-0 gap-3 overflow-x-scroll py-4 select-none xl:gap-5 ${dragging ? "cursor-grab" : "cursor-default"}`}
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

      <h1 className="text-2xl font-bold text-white xl:text-3xl">
        Check out playlists!
      </h1>
      <div
        ref={scrollableDivRef3}
        onMouseMove={(e) => dragDiv(e, scrollableDivRef3)}
        onMouseDown={() => dispatch(setDragging(true))}
        className={`hide-scrollbar mb-5 flex shrink-0 gap-3 overflow-x-scroll py-4 select-none xl:gap-5 ${dragging ? "cursor-grab" : "cursor-default"}`}
      >
        {playlistData?.map((item, index) => (
          <div
            key={item?.id || index}
            className="min-w-[12rem] xl:min-w-[15rem]" 
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
