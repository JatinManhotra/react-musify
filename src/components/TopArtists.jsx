import React, { useContext } from 'react'
import { setDragging } from '../redux/slice/playerSlice';
import { PlayerContext } from '../context/PlayerContext';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TopArtistsSkeleton from '../skeleton/TopArtistsSkeleton';

const TopArtists = () => {

  const {scrollableDivRef4, dragDiv, dispatch, dragging, albumsFetching} = useContext(PlayerContext)
  const artistData = useSelector((state)=>state.player.artistData);

  if(albumsFetching){
    return <TopArtistsSkeleton/>
  }

  return artistData && (
     <section className='xl:w-[28rem] p-2 mt-5 animate-left'>
          <h1 className='text-2xl font-bold text-white'>Top Artists</h1>
          <div ref={scrollableDivRef4} onMouseMove={(e)=>dragDiv(e,scrollableDivRef4)} onMouseDown={()=>dispatch(setDragging(true))}  className={`flex gap-5  mt-4 h-30 xl:h-40  items-start overflow-x-scroll hide-scrollbar select-none ${dragging ? "cursor-grab" : "cursor-default"}`}>
            {
              artistData?.map((item,index)=>(
                <div key={index} className=' shrink-0 w-20 h-20 xl:w-30 xl:h-30 group '>
                  <Link draggable={false} onDragStart={(e)=>e.preventDefault()} className='select-none' to={`/artist/${item.id}`}>
                  <img draggable="false" src={item?.picture_xl} alt="artistImg" className='rounded-full cursor-pointer object-cover ' /></Link>
                  <p className='text-white text-sm xl:text-base text-center mt-2 translate-y-[-1.25rem] opacity-0 group-hover:translate-y-[0] group-active:translate-y-[0] group-active:opacity-100 group-hover:opacity-100 transition-all duration-500 ease-in-out'>{item?.name}</p>
                </div>
              ))
            }
          </div>
        </section>
  )
}

export default TopArtists