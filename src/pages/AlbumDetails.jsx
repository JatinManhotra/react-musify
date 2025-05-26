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

    const {currentSongID, isPlaying} = useSelector((state)=>state.player)
  
  // console.log(albumData)
  if (isFetching) {
    return <AlbumDetailsSkeleton />;
  }

  if(error){
    return <ErrorPage/>
  }

  return (
    albumData && (
      <>
        <div className="mt-6 mb-4 flex items-center gap-4 pl-4 xl:absolute xl:top-20 xl:left-55">
          <IoIosArrowRoundBack
            className="cursor-pointer rounded-full border-2 border-white text-3xl text-gray-400 xl:text-4xl"
            onClick={() => navigate(-1)}
          />
          <p className="text-lg text-white xl:text-xl">Back</p>
        </div>

        <section className="hide-scrollbar animate-left overflow-y-scroll px-2 pb-10 xl:absolute xl:top-35  xl:left-55 xl:h-[78%] xl:w-[84%]">
          <div className="flex flex-col px-2 items-start xl:flex-row xl:items-center gap-5">
            <div className="flex items-center gap-5 ">
              <div className="w-full max-w-30 xl:h-40 xl:w-40 rounded-full text-white">
              <img
                draggable="false"
                src={albumData.cover_xl}
                alt={albumData.title}
                className="xl:h-40 xl:w-40 object-cover rounded-full border-4 border-white"
              />
            </div>

            <div>
              <h1 className="mb-2 text-lg xl:text-3xl font-bold text-white">
                {albumData.title}
              </h1>

              <h2 className="mb-2 xl:text-xl text-white">
                Label{" "}
                <span className="ml-1 text-sm xl:text-lg text-gray-400">
                  {" "}
                  {albumData.label}
                </span>
              </h2>

              <h3 className="xl:text-lg text-white">
                Number of <br className="block xl:hidden" /> Fans{" "}
                <span className="ml-1 text-sm xl:text-base text-gray-400">
                  {albumData.fans}
                </span>
              </h3>
            </div>
            </div>

            <div className="ml-5 xl:ml-10 flex items-center gap-5">
              <img
                className="h-20 w-20 rounded-full"
                src={albumData.genres.data[0].picture}
                alt={albumData.genres.data[0].name}
              />
              <h2 className="mb-2 flex flex-col text-lg xl:text-xl text-white">
                Genre{" "}
                <span className="text-base xl:text-lg text-gray-400">
                  {" "}
                  {albumData.genres.data[0].name}
                </span>
              </h2>
            </div>

            <div className="ml-5 xl:ml-10">
              <h3 className="mb-2 xl:text-lg text-white">
                Number of tracks{" "}
                <span className="ml-1 text-sm xl:text-base text-gray-400">
                  {albumData.nb_tracks}
                </span>
              </h3>
              <h3 className="mb-2 xl:text-lg text-white">
                Duration{" "}
                <span className="ml-1 text-sm xl:text-base text-gray-400">
                  {Math.floor(albumData.duration / 60)} mins
                </span>
              </h3>
              <h3 className="xl:text-lg text-white">
                Release Date{" "}
                <span className="ml-1 text-sm xl:text-base text-gray-400">
                  {albumData.release_date}
                </span>
              </h3>
            </div>
          </div>

          <div className="mt-15 px-2">
            {albumData.contributors && (
              <h1 className="mb-8 text-2xl xl:text-3xl font-bold text-white">
                Contributors
              </h1>
            )}

            <div className="flex flex-wrap gap-10">
              {albumData.contributors?.map((item, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="xl:h-32 xl:w-32 w-full max-w-25 shrink-0 rounded-full text-white">
                    <img
                      draggable="false"
                      src={item.picture_xl}
                      alt={item.name}
                      className="xl:h-32 xl:w-32 object-cover rounded-full"
                    />
                  </div>

                  <div className="text-white">
                    <Link to={`/artist/${item.id}`}>
                      <h1 className="cursor-pointer text-lg xl:text-xl font-bold">
                        {item.name}
                      </h1>
                    </Link>
                    <h2 className="xl:text-lg text-gray-400 capitalize">
                      {item.type}
                    </h2>
                    <h2 className="text-gray-400">{item.role}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-15 px-2">
            <h1 className="mb-8 text-2xl xl:text-3xl font-bold text-white">Artist</h1>

            <div className="flex items-center gap-5">
              <div className="xl:h-32 xl:w-32 w-full max-w-25 shrink-0 rounded-full text-white">
                <img
                  draggable="false"
                  src={albumData.artist.picture_xl}
                  alt={albumData.artist.name}
                  className="xl:h-32 xl:w-32 object-cover rounded-full"
                />
              </div>

              <div className="text-white">
                <Link to={`/artist/${albumData.artist.id}`}>
                  <h1 className="cursor-pointer text-lg xl:text-xl font-bold">
                    {albumData.artist.name}
                  </h1>
                </Link>
                <h2 className="xl:text-lg text-gray-400 capitalize">
                  {albumData.artist.type}
                </h2>
              </div>
            </div>
          </div>

          <h1 className="mt-15 px-2 mb-8 text-2xl xl:text-3xl font-bold text-white">Tracks</h1>

          <div>
            {albumData.tracks.data?.map((item, index) => (
               <div
                key={index}
                className={`mt-2 flex items-center justify-between px-2 rounded-lg py-2 text-white xl:px-4 xl:pr-8 xl:hover:bg-[#4b456e] ${item.id === currentSongID && isPlaying ? "bg-[#4b456e]" : ""}`}
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
