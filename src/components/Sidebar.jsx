import React, { useContext } from 'react';
import { logo } from '../assets/assets';
import { GoHome } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import { setSearchResults } from '../redux/slice/playerSlice';

const SidebarSkeleton = () => {
  return (
    <aside className='bg-[#141414] absolute top-0 left-0 bottom-0 w-[12rem] p-4'>
        
    </aside>
  )
}


const Sidebar = () => {

  const navigate = useNavigate();
  const {
      dispatch,
      setInput,
      setSearchQuery,top10Fetching,
albumsFetching,
playlistFetching
    } = useContext(PlayerContext);

  function handleHomeBtn() {
      navigate("/");
      // dispatch(setSearchResults([]));
      setSearchQuery("");
      setInput("");
    }

    if(top10Fetching || albumsFetching || playlistFetching){
    return <SidebarSkeleton/>
  }

  return (
    <aside className='bg-[#141414] absolute top-0 left-0 bottom-0 w-[12rem] p-4'>
        <div className='flex items-center gap-2 justify-center mt-4 hover:cursor-pointer' >
            <img className='w-12' src={logo} alt="Musify logo" />
            <h1 className='text-3xl text-white font-bold'>Musify</h1>
        </div>

        <div className='text-gray-400 mt-15 ml-4 text-lg hover:text-cyan-400 hover:cursor-pointer'>
            <Link onClick={handleHomeBtn} to={"/"}><h2 className='flex items-center gap-2'><GoHome /> <p>Discover</p></h2></Link>
        </div>
    </aside>
  )
}

export default Sidebar