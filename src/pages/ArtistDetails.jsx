import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetArtistQuery,
  useGetSearchResultsQuery,
} from "../redux/services/deezer";
import SongCard from "../components/SongCard";
import ArtistDetailsSkeleton from "../skeleton/ArtistDetailsSkeleton";
import { useSelector } from "react-redux";
import PlayPause from "../components/PlayPause";
import ErrorPage from "./ErrorPage";

const ArtistDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: artistData, isFetching, error } = useGetArtistQuery(id);
  const artistName = artistData?.name;

  const {currentSongID, isPlaying} = useSelector((state)=>state.player)

  const { data: searchResults } = useGetSearchResultsQuery(artistName, {
    skip: !artistName,
  });
  // const searchResultsData = searchResults?.data;
  const searchResults10Data = searchResults?.data.slice(0, 10);
  // console.log(searchResults10Data)

  const albumMap = new Map();

  searchResults10Data?.forEach((item) => {
    const albumId = item.album?.id;
    if (albumId && !albumMap.has(albumId)) {
      albumMap.set(albumId, item);
    }
  });

  const uniqueAlbums = Array.from(albumMap.values());

  if (isFetching) {
    return <ArtistDetailsSkeleton />;
  }

  if(error){
    return <ErrorPage/>
  }

  return searchResults10Data || artistData ? (
    <>
      <div className="mt-6 mb-4 flex items-center gap-4 pl-4 xl:absolute xl:top-20 xl:left-55">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full border-2 border-white text-3xl text-gray-400 xl:text-4xl"
          onClick={() => navigate(-1)}
        />
        <p className="text-lg text-white xl:text-xl">Back</p>
      </div>

      <section className="hide-scrollbar animate-left overflow-y-scroll px-2 pb-10 xl:absolute xl:top-35  xl:left-55 xl:h-[78%] xl:w-[83%]">
        <div className="flex pl-2 items-center gap-5">
          <div className="w-full max-w-30 rounded-full text-white xl:h-40 xl:w-40">
            <img
              draggable="false"
              src={artistData.picture_xl}
              alt={artistData.name}
              className="rounded-full border-4 border-white object-cover xl:h-40 xl:w-40"
            />
          </div>

          <div>
            <h1 className="mb-2 text-lg font-bold text-white xl:text-3xl">
              {artistData.name}
            </h1>
            <h2 className="mb-2 text-white xl:text-xl">
              Number of <br className="block xl:hidden" /> albums{" "}
              <span className="ml-1 text-sm text-gray-400 xl:text-lg">
                {" "}
                {artistData.nb_album}
              </span>
            </h2>
            <h3 className="text-white xl:text-lg">
              Number of <br className="block xl:hidden" /> Fans{" "}
              <span className="ml-1 text-sm text-gray-400 xl:text-base">
                {artistData.nb_fan}
              </span>
            </h3>
          </div>
        </div>

        <div className="mt-15">
          <div className="mb-8 flex pl-2 items-center justify-between">
            <h1 className="text-xl w-50 xl:w-full font-bold text-white xl:text-3xl">
              Check out {artistData.name}'s Songs
            </h1>
            <Link to={`/artist/${artistData.id}/songs`}>
              {" "}
              <button className="cursor-pointer rounded-2xl bg-[#3b24be] mr-2 px-3 py-1 text-sm whitespace-nowrap text-gray-300 xl:mr-5 xl:text-base">
                View All
              </button>
            </Link>
          </div>

          <div >
            {searchResults10Data?.map((item, index) => (
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
                  songList={searchResults10Data}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-15">
          <h1 className="mb-8 text-xl xl:text-3xl pl-2 font-bold text-white">
            Check out {artistData.name}'s Albums
          </h1>

          <div >
            {uniqueAlbums?.map((item, index) => (
              <div
                key={index}
                className={`mt-2 flex items-center justify-between rounded-lg  px-2 py-2 text-white xl:px-4 xl:pr-8 xl:hover:bg-[#4b456e]`}
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
                      <h2 className="truncate text-sm w-50 font-bold xl:text-lg">
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
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  ) : null;
};

export default ArtistDetails;
