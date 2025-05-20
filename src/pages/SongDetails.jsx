import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSongDetailsQuery } from "../redux/services/deezer";
import PlayPause from "../components/PlayPause";
import { IoIosArrowRoundBack } from "react-icons/io";

const SongDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: songData } = useGetSongDetailsQuery(id);
  // console.log(songData)

  return songData ? (
    <>
      <div className="absolute top-20 left-55 mb-4 flex items-center gap-4">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full border-2 border-white text-gray-400"
          size={40}
          onClick={() => navigate(-1)}
        />
        <p className="text-xl text-white">Back</p>
      </div>

      <section className="hide-scrollbar absolute top-35 left-55 h-[78%] w-[83%] overflow-y-scroll pb-10">
        <div className="flex items-center gap-5">
          <div className="group relative h-40 w-40 rounded-full text-white">
            <img
              draggable="false"
              src={`https://e-cdns-images.dzcdn.net/images/cover/${songData.md5_image}/1000x1000.jpg`}
              alt={songData.title}
              className="h-40 w-40 rounded-full border-4 border-white"
            />
            <PlayPause
              songID={songData.id}
              preview={songData.preview}
              songCard
            />
          </div>

          <div>
            <h1 className="mb-2 text-3xl font-bold text-white">
              {songData.title}
            </h1>
            <h2 className="mb-2 text-xl text-white">
              Released on{" "}
              <span className="ml-1 text-lg text-gray-400">
                {" "}
                {songData.release_date}
              </span>
            </h2>
            <h3 className="text-lg text-white">
              Rank{" "}
              <span className="ml-1 text-base text-gray-400">
                {songData.rank}
              </span>
            </h3>
          </div>
        </div>

        <div className="mt-15">
          {songData.contributors && (
            <h1 className="mb-8 text-3xl font-bold text-white">Contributors</h1>
          )}

          <div className="flex flex-wrap gap-10">
            {songData.contributors?.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="h-32 w-32 shrink-0 rounded-full text-white">
                  <img
                    draggable="false"
                    src={item.picture_xl}
                    alt={item.name}
                    className="h-32 w-32 rounded-full"
                  />
                </div>

                <div className="text-white">
                  <Link to={`/artist/${item.id}`}>
                    <h1 className="cursor-pointer text-xl font-bold">
                      {item.name}
                    </h1>
                  </Link>
                  <h2 className="text-lg text-gray-400 capitalize">
                    {item.type}
                  </h2>
                  <h2 className="text-gray-400">{item.role}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-15">
          <h1 className="mb-8 text-3xl font-bold text-white">Artist</h1>

          <div className="flex items-center gap-5">
            <div className="h-32 w-32 shrink-0 rounded-full text-white">
              <img
                draggable="false"
                src={songData.artist.picture_xl}
                alt={songData.artist.name}
                className="h-32 w-32 rounded-full"
              />
            </div>

            <div className="text-white">
              <Link to={`/artist/${songData.artist.id}`}>
                <h1 className="cursor-pointer text-xl font-bold">
                  {songData.artist.name}
                </h1>
              </Link>
              <h2 className="text-lg text-gray-400 capitalize">
                {songData.artist.type}
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-15">
          <h1 className="mb-8 text-3xl font-bold text-white">Album</h1>

          <div className="flex items-center gap-5">
            <div className="h-32 w-32 shrink-0 rounded-full text-white">
              <img
                draggable="false"
                src={songData.album.cover_xl}
                alt={songData.album.title}
                className="h-32 w-32 rounded-full"
              />
            </div>

            <div className="text-white">
              <Link to={`/album/${songData.album.id}`}>
                <h1 className="cursor-pointer text-xl font-bold">
                  {songData.album.title}
                </h1>
              </Link>
              <h2 className="mt-2 text-lg">
                Released on{" "}
                <span className="ml-1 text-base text-gray-400">
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
