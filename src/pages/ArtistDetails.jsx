import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetArtistQuery,
  useGetSearchResultsQuery,
} from "../redux/services/deezer";
import SongCard from "../components/SongCard";

const ArtistDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: artistData } = useGetArtistQuery(id);
  const artistName = artistData?.name

  const { data: searchResults } = useGetSearchResultsQuery(artistName, {skip: !artistName});
  const searchResultsData = searchResults?.data;
  const searchResults10Data = searchResults?.data.slice(0,10);
    console.log(searchResults10Data)

  return artistData || searchResults10Data? (
    <>
      <div className="absolute top-20 left-55 mb-4 flex items-center gap-4">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full border-2 border-white text-gray-400"
          size={40}
          onClick={() => navigate(-1)}
        />
        <p className="text-xl text-white">Back</p>
      </div>

      <section className="hide-scrollbar absolute top-35 left-55 h-[78%] w-[84%] overflow-y-scroll pb-10">
        <div className="flex items-center gap-5">
          <div className="h-40 w-40 rounded-full text-white">
            <img
              draggable="false"
              src={artistData.picture_xl}
              alt={artistData.name}
              className="h-40 w-40 rounded-full border-4 border-white"
            />
          </div>

          <div>
            <h1 className="mb-2 text-3xl font-bold text-white">
              {artistData.name}
            </h1>
            <h2 className="mb-2 text-xl text-white">
              Number of albums{" "}
              <span className="ml-1 text-lg text-gray-400">
                {" "}
                {artistData.nb_album}
              </span>
            </h2>
            <h3 className="text-lg text-white">
              Number of Fans{" "}
              <span className="ml-1 text-base text-gray-400">
                {artistData.nb_fan}
              </span>
            </h3>
          </div>
        </div>

        <div className="mt-15">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">
            Check out {artistData.name}'s Songs
            </h1>
            <button className="bg-[#3b24be] px-3 py-1 mr-5 rounded-2xl text-gray-300 cursor-pointer ">View All</button>
          </div>

          <div className="flex w-full flex-wrap gap-5">
            {searchResults10Data?.map((item, index) => (
              <SongCard
                key={item?.id || index}
                image={item?.md5_image}
                title={item?.title}
                artist={item?.artist?.name}
                artistId={item.artist.id}
                index={index}
                preview={item?.preview}
                songID={item?.id}
                songList={searchResults10Data}
                song
                strictWidth
              />
            ))}
          </div>
        </div>

        <div className="mt-15">
          <h1 className="mb-8 text-3xl font-bold text-white">
            Check out {artistData.name}'s Albums
          </h1>

          <div className="flex w-full flex-wrap gap-5">
            {searchResults10Data?.map((item, index) => (
              <SongCard
                key={item.album?.id || index}
                image={item.album?.cover_xl}
                title={item.album?.title}
                artist={item?.artist?.name}
                artistId={item.artist.id}
                index={index} 
                albumId={item.album?.id}
                album
                strictWidth
              />
            ))}
          </div>
        </div>
      </section>
    </>
  ) : null;
};

export default ArtistDetails;
