import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetTopAlbumsQuery } from "../redux/services/deezer";
import SongCard from "../components/SongCard";
import AlbumDetailsSkeleton from "../skeleton/AlbumDetailsSkeleton";

const AlbumDetails = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const {data:albumData, isFetching, error} = useGetTopAlbumsQuery(id);
    // console.log(albumData)
    if(isFetching){
      return <AlbumDetailsSkeleton/>
    }

  return albumData && (
    <>
      <div className="absolute top-20 left-55 mb-4 flex items-center gap-4">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full border-2 border-white text-gray-400"
          size={40}
          onClick={() => navigate(-1)}
        />
        <p className="text-xl text-white">Back</p>
      </div>

       <section className="hide-scrollbar animate-left absolute top-35 left-55 h-[78%] w-[84%] overflow-y-scroll pb-10">
             <div className="flex items-center gap-5">
          <div className="h-40 w-40 rounded-full text-white">
            <img
              draggable="false"
              src={albumData.cover_xl}
              alt={albumData.title}
              className="h-40 w-40 rounded-full border-4 border-white"
            />
          </div>

          <div>
            <h1 className="mb-2 text-3xl font-bold text-white">
              {albumData.title}
            </h1>
            
            <h2 className="mb-2 text-xl text-white">
              Label{" "}
              <span className="ml-1 text-lg text-gray-400">
                {" "}
                {albumData.label}
              </span>
            </h2>
            
            <h3 className="text-lg text-white">
              Number of Fans{" "}
              <span className="ml-1 text-base text-gray-400">
                {albumData.fans}
              </span>
            </h3>
          </div>

            <div className="flex items-center gap-5 ml-10">
                <img className="rounded-full w-20 h-20" src={albumData.genres.data[0].picture} alt={albumData.genres.data[0].name} />
                <h2 className="mb-2 text-xl flex flex-col text-white">
              Genre{" "}
              <span className="text-lg text-gray-400">
                {" "}
                {albumData.genres.data[0].name}
              </span>
            </h2>
            
            </div>

            <div className="ml-10 ">
                <h3 className="mb-2 text-lg text-white">
              Number of tracks{" "}
              <span className="ml-1 text-base text-gray-400">
                {albumData.nb_tracks}
              </span>
            </h3>
                <h3 className="mb-2 text-lg text-white">
              Duration{" "}
              <span className="ml-1 text-base text-gray-400">
                {Math.floor((albumData.duration)/60)} mins
              </span>
            </h3>
                <h3 className="text-lg text-white">
              Release Date{" "}
              <span className="ml-1 text-base text-gray-400">
                {albumData.release_date}
              </span>
            </h3>
            </div>

        </div>

<div className="mt-15">
          {albumData.contributors && (
            <h1 className="mb-8 text-3xl font-bold text-white">Contributors</h1>
          )}

          <div className="flex flex-wrap gap-10">
            {albumData.contributors?.map((item, index) => (
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
                        src={albumData.artist.picture_xl}
                        alt={albumData.artist.name}
                        className="h-32 w-32 rounded-full"
                      />
                    </div>
        
                    <div className="text-white">
                      <Link to={`/artist/${albumData.artist.id}`}>
                        <h1 className="cursor-pointer text-xl font-bold">
                          {albumData.artist.name}
                        </h1>
                      </Link>
                      <h2 className="text-lg text-gray-400 capitalize">
                        {albumData.artist.type}
                      </h2>
                    </div>
                  </div>
                </div>

                 <h1 className="mb-8 mt-15 text-3xl font-bold text-white">Tracks</h1>

                <div className="flex w-full flex-wrap gap-5">
            {albumData.tracks.data?.map((item, index) => (
              <SongCard
                key={item?.id || index}
                image={item?.md5_image}
                title={item?.title}
                artist={item?.artist?.name}
                artistId={item.artist.id}
                index={index}
                preview={item?.preview}
                songID={item?.id}
                songList={albumData.tracks.data}
                song
                strictWidth
              />
            ))}
          </div>



      </section>
    </>
  );
};

export default AlbumDetails;
