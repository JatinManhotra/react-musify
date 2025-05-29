import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setSearchResults } from "../redux/slice/playerSlice";
import { PlayerContext } from "../context/PlayerContext";
import SongCard from "../components/SongCard";
import SearchResultsSkeleton from "../skeleton/SearchResultsSkeleton";
import PlayPause from "../components/PlayPause";
import ErrorPage from "./ErrorPage";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { setInput, setSearchQuery } = useContext(PlayerContext);
  const { currentSongID, isPlaying } = useSelector((state) => state.player);

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

  if (searchResultsStatus?.isFetching) {
    return <SearchResultsSkeleton />;
  }

  if (searchResultsStatus?.error) {
    return <ErrorPage />;
  }

  return searchResults?.data?.length > 0 ? (
    <>
      <div className="mt-6 xl:mt-0 xl:ml-0 mb-4 flex items-center gap-4 pl-4 sm:ml-[12rem] xl:absolute xl:top-20 xl:left-55">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full border-2 border-white text-3xl text-gray-400 xl:text-4xl"
          onClick={handleBackBtn}
        />
        <p className="text-lg text-white xl:text-xl">Back</p>
      </div>

      <section className="hide-scrollbar xl:ml-0 animate-left overflow-y-scroll px-2 pb-10 sm:ml-[12rem] xl:absolute xl:top-35 xl:left-55 xl:h-[calc(100vh_-_12rem)] xl:w-[82%]">
        <h1 className="mt-8 mb-8 px-2 text-2xl font-bold text-white xl:text-3xl">
          Showing results for <span className="italic">"{searchQuery}"</span>
        </h1>

        <div>
          {searchResults.data?.map((item, index) => (
            <div
              key={index}
              className={`mt-2 flex items-center justify-between rounded-lg px-2 py-2 text-white lg:hover:bg-[#4b456e] xl:px-4 xl:pr-8 ${item.id === currentSongID && isPlaying ? "bg-[#4b456e]" : ""}`}
            >
              <div className="flex items-center gap-4">
                <p>{index + 1}.</p>
                <img
                  className="w-12 rounded-lg lg:w-14 xl:w-15"
                  src={`https://e-cdns-images.dzcdn.net/images/cover/${item?.md5_image}/1000x1000.jpg`}
                  alt="topCharts"
                />
                <div>
                  <Link to={`/song/${item.id}`}>
                    <h2 className="w-35 truncate text-sm font-bold sm:w-65 lg:w-150 lg:text-base xl:text-lg">
                      {item?.title}
                    </h2>
                  </Link>
                  <Link to={`/artist/${item.artist.id}`}>
                    <h3 className="w-35 truncate text-xs text-gray-300 sm:w-65 lg:w-150 lg:text-sm">
                      {item?.artist?.name}
                    </h3>
                  </Link>
                </div>
              </div>
              <PlayPause
                topCharts
                preview={item.preview}
                songID={item.id}
                songList={searchResults.data}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  ) : (
    <>
      <div className="mt-6 mb-4 flex items-center gap-4 pl-4 sm:ml-[12rem] xl:absolute xl:top-20 xl:left-55">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full border-2 border-white text-3xl text-gray-400 xl:text-4xl"
          onClick={handleBackBtn}
        />
        <p className="text-lg text-white xl:text-xl">Back</p>
      </div>

      <section className="hide-scrollbar animate-left overflow-y-scroll px-2 pb-10 sm:ml-[12rem] xl:absolute xl:top-35 xl:left-55 xl:h-[78%] xl:w-[84%]">
        <h1 className="mt-8 mb-8 px-2 text-2xl font-bold text-white xl:text-3xl">
          No results for <span className="italic">"{searchQuery}"</span>
        </h1>
      </section>
    </>
  );
};

export default SearchResults;
