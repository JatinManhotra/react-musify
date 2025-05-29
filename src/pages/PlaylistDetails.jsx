import React from "react";
import { useGetPlaylistsQuery } from "../redux/services/deezer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import SongCard from "../components/SongCard";
import PlaylistDetailsSkeleton from "../skeleton/PlaylistDetailsSkeleton";
import { useSelector } from "react-redux";
import PlayPause from "../components/PlayPause";
import ErrorPage from "./ErrorPage";

const PlaylistDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: playlistData, isFetching, error } = useGetPlaylistsQuery(id);
  const { currentSongID, isPlaying } = useSelector((state) => state.player);

  // console.log(playlistData)
  if (isFetching) {
    return <PlaylistDetailsSkeleton />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    playlistData && (
      <>
        <div className="mt-6 mb-4 flex items-center gap-4 pl-4 sm:ml-[12rem] xl:absolute xl:top-20 xl:left-55 xl:mt-0 xl:ml-0">
          <IoIosArrowRoundBack
            className="cursor-pointer rounded-full border-2 border-white text-3xl text-gray-400 xl:text-4xl"
            onClick={() => navigate(-1)}
          />
          <p className="text-lg text-white xl:text-xl">Back</p>
        </div>

        <section className="hide-scrollbar animate-left overflow-y-scroll px-2 pb-10 sm:ml-[12rem] xl:absolute xl:top-35 xl:left-55 xl:ml-0 xl:h-[calc(100vh_-_12rem)] xl:w-[82%]">
          <div className="flex flex-col items-start gap-5 px-2 xl:flex-row xl:items-center">
            <div className="flex items-center gap-5">
              <div className="w-full max-w-30 rounded-full text-white xl:h-40 xl:w-40 xl:max-w-fit">
                <img
                  draggable="false"
                  src={playlistData.picture_xl}
                  alt={playlistData.title}
                  className="rounded-full border-4 border-white object-cover xl:h-40 xl:w-40"
                />
              </div>

              <div>
                <h1 className="mb-2 text-lg font-bold text-white xl:text-3xl">
                  {playlistData.title}
                </h1>

                <h3 className="text-white xl:text-lg">
                  Number of <br className="block sm:hidden" /> Fans{" "}
                  <span className="ml-1 text-sm text-gray-400 xl:text-base">
                    {playlistData.fans}
                  </span>
                </h3>
              </div>
            </div>

            <div className="ml-5 xl:ml-10">
              <h3 className="mb-2 text-white xl:text-lg">
                Number of tracks{" "}
                <span className="ml-1 text-sm text-gray-400 xl:text-base">
                  {playlistData.nb_tracks}
                </span>
              </h3>
              <h3 className="mb-2 text-white xl:text-lg">
                Duration{" "}
                <span className="ml-1 text-sm text-gray-400 xl:text-base">
                  {Math.floor(playlistData.duration / 60)} mins
                </span>
              </h3>
            </div>

            <div className="ml-5 xl:ml-10">
              <h3 className="mb-2 text-white xl:text-lg">
                Created by{" "}
                <span className="ml-1 text-sm text-gray-400 xl:text-base">
                  {playlistData.creator.name}
                </span>
              </h3>

              <h3 className="text-white xl:text-lg">
                Created on{" "}
                <span className="ml-1 text-sm text-gray-400 xl:text-base">
                  {playlistData.creation_date}
                </span>
              </h3>
            </div>
          </div>

          <h1 className="mt-15 mb-8 px-2 text-2xl font-bold text-white xl:text-3xl">
            Tracks
          </h1>

          <div>
            {playlistData.tracks.data?.map((item, index) => (
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
                      <h2 className="w-35 truncate text-sm font-bold sm:w-65 lg:text-base xl:text-lg">
                        {item?.title}
                      </h2>
                    </Link>
                    <Link to={`/artist/${item.artist.id}`}>
                      <h3 className="w-35 truncate text-xs text-gray-300 sm:w-65 lg:text-sm">
                        {item?.artist?.name}
                      </h3>
                    </Link>
                  </div>
                </div>
                <PlayPause
                  topCharts
                  preview={item.preview}
                  songID={item.id}
                  songList={playlistData.tracks.data}
                />
              </div>
            ))}
          </div>
        </section>
      </>
    )
  );
};

export default PlaylistDetails;
