import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetTopAlbumsQuery } from "../redux/services/deezer";
import SongCard from "../components/SongCard";
import AlbumDetailsSkeleton from "../skeleton/AlbumDetailsSkeleton";
import PlayPause from "../components/PlayPause";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";

const AlbumDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: albumData, isFetching, error } = useGetTopAlbumsQuery(id);

  const { currentSongID, isPlaying } = useSelector((state) => state.player);

  // console.log(albumData)
  if (isFetching) {
    return <AlbumDetailsSkeleton />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    albumData && (
      <>
        <div className="mt-6 mb-4 flex items-center gap-4 pl-4 sm:ml-[12rem] xl:absolute xl:top-20 xl:left-55 xl:mt-0 xl:ml-0">
          <IoIosArrowRoundBack
            className="cursor-pointer rounded-full border-2 border-white text-3xl text-gray-400 xl:text-4xl"
            onClick={() => navigate(-1)}
          />
          <p className="text-lg text-white xl:text-xl">Back</p>
        </div>

        <section className="hide-scrollbar animate-left overflow-y-scroll px-2 pb-10 sm:ml-[12rem] xl:absolute xl:top-35 xl:left-55 xl:ml-0 xl:h-[calc(100vh_-_12rem)] xl:w-[82%]">
          <div className="flex flex-col items-start gap-5 px-2 md:flex-row md:flex-wrap md:items-center md:gap-8 xl:items-center">
            <div className="flex items-center gap-5">
              <div className="w-full max-w-30 rounded-full text-white xl:h-40 xl:w-40 xl:max-w-fit">
                <img
                  draggable="false"
                  src={albumData.cover_xl}
                  alt={albumData.title}
                  className="rounded-full border-4 border-white object-cover xl:h-40 xl:w-40"
                />
              </div>

              <div>
                <h1 className="mb-2 text-lg font-bold text-white xl:text-3xl">
                  {albumData.title}
                </h1>

                <h2 className="mb-2 text-white xl:text-xl">
                  Label{" "}
                  <span className="ml-1 text-sm text-gray-400 xl:text-lg">
                    {" "}
                    {albumData.label}
                  </span>
                </h2>

                <h3 className="text-white xl:text-lg">
                  Number of <br className="block sm:hidden" /> Fans{" "}
                  <span className="ml-1 text-sm text-gray-400 xl:text-base">
                    {albumData.fans}
                  </span>
                </h3>
              </div>
            </div>

            <div className="ml-5 flex items-center gap-5 xl:ml-10">
              <img
                className="h-20 w-20 rounded-full"
                src={albumData.genres.data[0].picture}
                alt={albumData.genres.data[0].name}
              />
              <h2 className="mb-2 flex flex-col text-lg text-white xl:text-xl">
                Genre{" "}
                <span className="text-base text-gray-400 xl:text-lg">
                  {" "}
                  {albumData.genres.data[0].name}
                </span>
              </h2>
            </div>

            <div className="ml-5 xl:ml-10">
              <h3 className="mb-2 text-white xl:text-lg">
                Number of tracks{" "}
                <span className="ml-1 text-sm text-gray-400 xl:text-base">
                  {albumData.nb_tracks}
                </span>
              </h3>
              <h3 className="mb-2 text-white xl:text-lg">
                Duration{" "}
                <span className="ml-1 text-sm text-gray-400 xl:text-base">
                  {Math.floor(albumData.duration / 60)} mins
                </span>
              </h3>
              <h3 className="text-white xl:text-lg">
                Release Date{" "}
                <span className="ml-1 text-sm text-gray-400 xl:text-base">
                  {albumData.release_date}
                </span>
              </h3>
            </div>
          </div>

          <div className="mt-15 px-2">
            {albumData.contributors && (
              <h1 className="mb-8 text-2xl font-bold text-white xl:text-3xl">
                Contributors
              </h1>
            )}

            <div className="flex flex-wrap gap-10">
              {albumData.contributors?.map((item, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="w-full max-w-25 shrink-0 rounded-full text-white xl:h-32 xl:w-32 xl:max-w-fit">
                    <img
                      draggable="false"
                      src={item.picture_xl}
                      alt={item.name}
                      className="rounded-full object-cover xl:h-32 xl:w-32"
                    />
                  </div>

                  <div className="text-white">
                    <Link to={`/artist/${item.id}`}>
                      <h1 className="cursor-pointer text-lg font-bold xl:text-xl">
                        {item.name}
                      </h1>
                    </Link>
                    <h2 className="text-gray-400 capitalize xl:text-lg">
                      {item.type}
                    </h2>
                    <h2 className="text-gray-400">{item.role}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-15 px-2">
            <h1 className="mb-8 text-2xl font-bold text-white xl:text-3xl">
              Artist
            </h1>

            <div className="flex items-center gap-5">
              <div className="w-full max-w-25 shrink-0 rounded-full text-white xl:h-32 xl:w-32 xl:max-w-fit">
                <img
                  draggable="false"
                  src={albumData.artist.picture_xl}
                  alt={albumData.artist.name}
                  className="rounded-full object-cover xl:h-32 xl:w-32"
                />
              </div>

              <div className="text-white">
                <Link to={`/artist/${albumData.artist.id}`}>
                  <h1 className="cursor-pointer text-lg font-bold xl:text-xl">
                    {albumData.artist.name}
                  </h1>
                </Link>
                <h2 className="text-gray-400 capitalize xl:text-lg">
                  {albumData.artist.type}
                </h2>
              </div>
            </div>
          </div>

          <h1 className="mt-15 mb-8 px-2 text-2xl font-bold text-white xl:text-3xl">
            Tracks
          </h1>

          <div>
            {albumData.tracks.data?.map((item, index) => (
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
                      <h2 className="w-35 truncate text-sm font-bold sm:w-65 md:w-90 lg:text-base xl:text-lg">
                        {item?.title}
                      </h2>
                    </Link>
                    <Link to={`/artist/${item.artist.id}`}>
                      <h3 className="w-35 truncate text-xs text-gray-300 sm:w-65 md:w-90 lg:text-sm">
                        {item?.artist?.name}
                      </h3>
                    </Link>
                  </div>
                </div>
                <PlayPause
                  topCharts
                  preview={item.preview}
                  songID={item.id}
                  songList={albumData.tracks.data}
                />
              </div>
            ))}
          </div>
        </section>
      </>
    )
  );
};

export default AlbumDetails;
