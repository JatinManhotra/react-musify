import React from "react";
import { useGetPlaylistsQuery } from "../redux/services/deezer";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import SongCard from "../components/SongCard";
import PlaylistDetailsSkeleton from "../skeleton/PlaylistDetailsSkeleton";

const PlaylistDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: playlistData, isFetching, error } = useGetPlaylistsQuery(id);
  // console.log(playlistData)
  if(isFetching){
    return <PlaylistDetailsSkeleton/>
  }

  return (
    playlistData && (
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
              src={playlistData.picture_xl}
              alt={playlistData.title}
              className="h-40 w-40 rounded-full border-4 border-white"
            />
          </div>

          <div>
            <h1 className="mb-2 text-3xl font-bold text-white">
              {playlistData.title}
            </h1>
            
            
            
            <h3 className="text-lg text-white">
              Number of Fans{" "}
              <span className="ml-1 text-base text-gray-400">
                {playlistData.fans}
              </span>
            </h3>
          </div>

           

            <div className="ml-10 ">
                <h3 className="mb-2 text-lg text-white">
              Number of tracks{" "}
              <span className="ml-1 text-base text-gray-400">
                {playlistData.nb_tracks}
              </span>
            </h3>
                <h3 className="mb-2 text-lg text-white">
              Duration{" "}
              <span className="ml-1 text-base text-gray-400">
                {Math.floor((playlistData.duration)/60)} mins
              </span>
            </h3>
                
            </div>

            <div className="ml-10 ">
                <h3 className="mb-2 text-lg text-white">
              Created by{" "}
              <span className="ml-1 text-base text-gray-400">
                {playlistData.creator.name}
              </span>
            </h3>
                
                <h3 className="text-lg text-white">
              Created on{" "}
              <span className="ml-1 text-base text-gray-400">
                {playlistData.creation_date}
              </span>
            </h3>
            </div>

        </div>

         <h1 className="mb-8 mt-15 text-3xl font-bold text-white">Tracks</h1>
        
                        <div className="flex w-full flex-wrap gap-5">
                    {playlistData.tracks.data?.map((item, index) => (
                      <SongCard
                        key={item?.id || index}
                        image={item?.md5_image}
                        title={item?.title}
                        artist={item?.artist?.name}
                        artistId={item.artist.id}
                        index={index}
                        preview={item?.preview}
                        songID={item?.id}
                        songList={playlistData.tracks.data}
                        song
                        strictWidth
                      />
                    ))}
                    </div>

        </section>
      </>
    )
  );
};

export default PlaylistDetails;
