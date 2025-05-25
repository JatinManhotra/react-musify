import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetArtistQuery, useGetSearchResultsQuery } from '../redux/services/deezer';
import { IoIosArrowRoundBack } from 'react-icons/io';
import SongCard from '../components/SongCard';

const ArtistSongs = () => {

    const navigate = useNavigate();
      const { id } = useParams();
    
      const { data: artistData } = useGetArtistQuery(id);
      const artistName = artistData?.name;
    
      const { data: searchResults } = useGetSearchResultsQuery(artistName, {
        skip: !artistName,
      });
      const searchResultsData = searchResults?.data;

  return artistData || searchResultsData ?(

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
        

      
          

          <div className="flex w-full flex-wrap gap-5">
            {searchResultsData?.map((item, index) => (
              <SongCard
                key={item?.id || index}
                image={item?.md5_image}
                title={item?.title}
                artist={item?.artist?.name}
                artistId={item.artist.id}
                index={index}
                preview={item?.preview}
                songID={item?.id}
                songList={searchResultsData}
                song
                strictWidth
              />
            ))}
          </div>
    

       
      </section>
    </>
  )
  : null
}

export default ArtistSongs