import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSearchResults } from "../redux/slice/playerSlice";
import { PlayerContext } from "../context/PlayerContext";
import SongCard from "../components/SongCard";
import SearchResultsSkeleton from "../skeleton/SearchResultsSkeleton";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { setInput, setSearchQuery } = useContext(PlayerContext);

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");
  const { searchResults, searchResultsStatus } = useSelector(
    (state) => state.player,
  );

  function handleBackBtn() {
    navigate("/");
    setSearchQuery("");
    setInput("");
  }

 if(searchResultsStatus?.isFetching){
  return <SearchResultsSkeleton/>
 }

  return searchResults?.data?.length > 0 ? (
    <>
      <div className="absolute top-20 left-55 mb-4 flex items-center gap-4">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full border-2 border-white text-gray-400"
          size={40}
          onClick={handleBackBtn}
        />
        <p className="text-xl text-white">Back</p>
      </div>

      <section className="hide-scrollbar animate-left absolute top-35 left-55 h-[78%] w-[84%] overflow-y-scroll pb-10">
        <h1 className="mt-8 mb-8 text-3xl font-bold text-white">
          Showing results for <span className="italic">"{searchQuery}"</span>
        </h1>

        <div className="flex w-full flex-wrap gap-5">
          {searchResults.data?.map((item, index) => (
            <SongCard
              key={item?.id || index}
              image={item?.md5_image}
              title={item?.title}
              artist={item?.artist?.name}
              artistId={item.artist.id}
              index={index}
              preview={item?.preview}
              songID={item?.id}
              songList={searchResults.data}
              song
              strictWidth
            />
          ))}
        </div>
      </section>
    </>
  ) : (
    <>
      <div className="absolute top-20 left-55 mb-4 flex items-center gap-4">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full border-2 border-white text-gray-400"
          size={40}
          onClick={handleBackBtn}
        />
        <p className="text-xl text-white">Back</p>
      </div>

      <section className="hide-scrollbar absolute top-35 left-55 h-[78%] w-[84%] overflow-y-scroll pb-10">
        <h1 className="mt-8 mb-8 text-3xl font-bold text-white">
          No results for <span className="italic">"{searchQuery}"</span>
        </h1>
      </section>
    </>
  );
};

export default SearchResults;
