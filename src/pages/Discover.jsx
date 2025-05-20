import React, { useContext } from "react";
import SongCard from "../components/SongCard";
import { setDragging } from "../redux/slice/playerSlice";
import { PlayerContext } from "../context/PlayerContext";
import { useSelector } from "react-redux";

const Discover = () => {

  const {albums,
    top10data,
    scrollableDivRef1,
    scrollableDivRef2,
    scrollableDivRef3,
    dragDiv,
    dragging,dispatch,playlistData} = useContext(PlayerContext)

    // const playlistsData = useSelector((state)=>state.player.playlistsData);
    
    
    // console.log(playlistsData)
//   console.log(top10data);

  return (
    <section className="hide-scrollbar absolute top-20 left-55 h-[87%] w-[50%] overflow-y-scroll">
      <h1 className="text-3xl font-bold text-white">Discover</h1>
      <div
        ref={scrollableDivRef1}
        onMouseMove={(e) => dragDiv(e, scrollableDivRef1)}
        onMouseDown={() => dispatch(setDragging(true))}
        className={`hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-scroll py-4 select-none ${dragging ? "cursor-grab" : "cursor-default"}`}
      >
        {top10data?.data?.map((item, index) => (
          <SongCard
            key={item?.id || index}
            image={item?.md5_image}
            title={item?.title}
            artist={item?.artist?.name}
            index={index}
            preview={item?.preview}
            songID={item?.id}
            songList={top10data.data}
          />
        ))}
      </div>

      <h1 className="text-3xl font-bold text-white">Popular Albums</h1>
      <div
        ref={scrollableDivRef2}
        onMouseMove={(e) => dragDiv(e, scrollableDivRef2)}
        onMouseDown={() => dispatch(setDragging(true))}
        className={`hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-scroll py-4 select-none ${dragging ? "cursor-grab" : "cursor-default"}`}
      >
        {albums?.map((item, index) => (
          <SongCard
            key={item?.id || index}
            image={item?.album?.cover_xl}
            title={item?.album?.title}
            artist={item?.artist?.name}
            index={index}
            album
          />
        ))}
      </div>

      <h1 className="text-3xl font-bold text-white">Check out playlists!</h1>
      <div
        ref={scrollableDivRef3}
        onMouseMove={(e) => dragDiv(e, scrollableDivRef3)}
        onMouseDown={() => dispatch(setDragging(true))}
        className={`hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-scroll py-4 select-none ${dragging ? "cursor-grab" : "cursor-default"}`}
      >
        {playlistData?.map((item, index) => (
          <SongCard
            key={item?.id || index}
            image={item?.picture_xl}
            title={item?.title}
            index={index}
            playlist
          />
        ))}
      </div>
    </section>
  );
};

export default Discover;
