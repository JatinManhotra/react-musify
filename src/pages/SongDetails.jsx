import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSongDetailsQuery } from "../redux/services/deezer";
import PlayPause from "../components/PlayPause";
import { IoIosArrowRoundBack } from "react-icons/io";
import SongDetailsSkeleton from "../skeleton/SongDetailsSkeleton";
import ErrorPage from "./ErrorPage";

const SongDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: songData, isFetching, error } = useGetSongDetailsQuery(id);
  // console.log(songData)
  if (isFetching) {
    return <SongDetailsSkeleton />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return songData ? (
    <>
      <div className="mt-6 mb-4 flex items-center gap-4 pl-4 sm:ml-[12rem] xl:absolute xl:top-20 xl:left-55 xl:mt-0 xl:ml-0">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full border-2 border-white text-3xl text-gray-400 xl:text-4xl"
          onClick={() => navigate(-1)}
        />
        <p className="text-lg text-white xl:text-xl">Back</p>
      </div>

      <section className="hide-scrollbar animate-left sm:ml-[12rem] overflow-y-scroll px-4 pb-10 xl:absolute xl:top-35 xl:left-55 xl:ml-0 xl:h-[calc(100vh_-_12rem)] xl:w-[82%]">
        <div className="flex items-center gap-5">
          <div className="group relative w-full max-w-30 rounded-full text-white lg:h-35 lg:w-35 lg:max-w-fit xl:h-40 xl:w-40">
            <img
              draggable="false"
              src={`https://e-cdns-images.dzcdn.net/images/cover/${songData.md5_image}/1000x1000.jpg`}
              alt={songData.title}
              className="rounded-full border-4 border-white object-cover lg:h-35 lg:w-35 xl:h-40 xl:w-40"
            />
            <PlayPause
              songID={songData.id}
              preview={songData.preview}
              songCard
              rounded
            />
          </div>

          <div>
            <h1 className="mb-2 text-lg font-bold text-white lg:text-xl xl:text-3xl">
              {songData.title}
            </h1>
            <h2 className="mb-2 text-white lg:text-lg xl:text-xl">
              Released on <br className="block sm:hidden" />
              <span className="ml-1 text-sm text-gray-400 lg:text-base xl:text-lg">
                {" "}
                {songData.release_date}
              </span>
            </h2>
            <h3 className="text-white lg:text-base xl:text-lg">
              Rank{" "}
              <span className="ml-1 text-sm text-gray-400 xl:text-base">
                {songData.rank}
              </span>
            </h3>
          </div>
        </div>

        <div className="mt-15">
          {songData.contributors && (
            <h1 className="mb-8 text-2xl font-bold text-white xl:text-3xl">
              Contributors
            </h1>
          )}

          <div className="flex flex-wrap gap-10">
            {songData.contributors?.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="w-full max-w-25 shrink-0 rounded-full text-white lg:h-30 lg:w-30 lg:max-w-fit xl:h-32 xl:w-32">
                  <img
                    draggable="false"
                    src={item.picture_xl}
                    alt={item.name}
                    className="rounded-full object-cover lg:h-30 lg:w-30 xl:h-32 xl:w-32"
                  />
                </div>

                <div className="text-white">
                  <Link to={`/artist/${item.id}`}>
                    <h1 className="cursor-pointer text-lg font-bold lg:text-xl">
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

        <div className="mt-15">
          <h1 className="mb-8 text-2xl font-bold text-white xl:text-3xl">
            Artist
          </h1>

          <div className="flex items-center gap-5">
            <div className="w-full max-w-25 shrink-0 rounded-full text-white lg:h-30 lg:w-30 lg:max-w-fit xl:h-32 xl:w-32">
              <img
                draggable="false"
                src={songData.artist.picture_xl}
                alt={songData.artist.name}
                className="rounded-full object-cover lg:h-30 lg:w-30 xl:h-32 xl:w-32"
              />
            </div>

            <div className="text-white">
              <Link to={`/artist/${songData.artist.id}`}>
                <h1 className="cursor-pointer text-lg font-bold lg:text-xl">
                  {songData.artist.name}
                </h1>
              </Link>
              <h2 className="text-gray-400 capitalize xl:text-lg">
                {songData.artist.type}
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-15">
          <h1 className="mb-8 text-2xl font-bold text-white xl:text-3xl">
            Album
          </h1>

          <div className="flex items-center gap-5">
            <div className="w-full max-w-25 shrink-0 rounded-full text-white lg:h-30 lg:w-30 lg:max-w-fit xl:h-32 xl:w-32">
              <img
                draggable="false"
                src={songData.album.cover_xl}
                alt={songData.album.title}
                className="rounded-full object-cover lg:h-30 lg:w-30 xl:h-32 xl:w-32"
              />
            </div>

            <div className="text-white">
              <Link to={`/album/${songData.album.id}`}>
                <h1 className="cursor-pointer text-lg font-bold lg:text-xl">
                  {songData.album.title}
                </h1>
              </Link>
              <h2 className="mt-2 xl:text-lg">
                Released on <br className="block sm:hidden" />
                <span className="ml-1 text-sm text-gray-400 xl:text-base">
                  {songData.album.release_date}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : null;
};

export default SongDetails;
