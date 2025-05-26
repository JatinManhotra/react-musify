import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetArtistQuery,
  useGetSearchResultsQuery,
} from "../redux/services/deezer";
import { IoIosArrowRoundBack } from "react-icons/io";
import SongCard from "../components/SongCard";
import { useSelector } from "react-redux";
import PlayPause from "../components/PlayPause";
import ErrorPage from "./ErrorPage";

const ArtistSongs = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: artistData, error } = useGetArtistQuery(id);
  const artistName = artistData?.name;

    const {currentSongID, isPlaying} = useSelector((state)=>state.player)

  const { data: searchResults } = useGetSearchResultsQuery(artistName, {
    skip: !artistName,
  });
  const searchResultsData = searchResults?.data;

  if(error){
    return <ErrorPage/>
  }

  return artistData || searchResultsData ? (
    <>
      <div className="mt-6 mb-4 flex items-center gap-4 pl-4 xl:absolute xl:top-20 xl:left-55">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full border-2 border-white text-3xl text-gray-400 xl:text-4xl"
          onClick={() => navigate(-1)}
        />
        <p className="text-lg text-white xl:text-xl">Back</p>
      </div>

      <section className="hide-scrollbar animate-left px-2 xl:absolute xl:top-35 xl:left-55 xl:h-[78%] xl:w-[84%] overflow-y-scroll pb-10">
        <div >
          {searchResultsData?.map((item, index) => (
             <div
                key={index}
                className={`mt-2 flex items-center justify-between rounded-lg px-2 py-2 text-white xl:px-4 xl:pr-8 xl:hover:bg-[#4b456e] ${item.id === currentSongID && isPlaying ? "bg-[#4b456e]" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <p>{index + 1}.</p>
                  <img
                    className="w-12 rounded-lg xl:w-15"
                    src={`https://e-cdns-images.dzcdn.net/images/cover/${item?.md5_image}/1000x1000.jpg`}
                    alt="topCharts"
                  />
                  <div>
                    <Link to={`/song/${item.id}`}>
                      <h2 className="truncate text-sm w-35 font-bold xl:text-lg">
                        {item?.title}
                      </h2>
                    </Link>
                    <Link to={`/artist/${item.artist.id}`}>
                      <h3 className="truncate text-xs w-35 text-gray-300 xl:text-sm">
                        {item?.artist?.name}
                      </h3>
                    </Link>
                  </div>
                </div>
                <PlayPause
                  topCharts
                  preview={item.preview}
                  songID={item.id}
                  songList={searchResultsData}
                />
              </div>
          ))}
        </div>
      </section>
    </>
  ) : null;
};

export default ArtistSongs;
