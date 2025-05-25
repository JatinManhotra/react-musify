import React, { useContext } from 'react'
import PlayPause from './PlayPause'
import { PlayerContext } from '../context/PlayerContext'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TopChartsSkeleton from '../skeleton/TopChartsSkeleton'

const TopCharts = () => {

  const {topChartsSongs, albumsFetching} = useContext(PlayerContext);

  if(albumsFetching){
    return <TopChartsSkeleton/>
  }


  return (
    <section className='w-[28rem] animate-left'>
      <h1 className='text-2xl font-bold text-white'>Top Charts</h1>
      <div>
        {
          topChartsSongs?.map((item,index)=>(
            <div key={index} className='flex items-center  justify-between px-4 py-2 rounded-lg text-white hover:bg-[#4b456e] mt-2 pr-8 '>
              <div className='flex items-center gap-4'>
              <p>{index+1}.</p>
              <img className='w-15 rounded-lg ' src={`https://e-cdns-images.dzcdn.net/images/cover/${item?.md5_image}/1000x1000.jpg`} alt="topCharts" />
              <div>
                <Link to={`/song/${item.id}`}><h2 className='font-bold text-lg truncate'>{item?.title}</h2></Link>
                <Link to={`/artist/${item.artist.id}`}>
                <h3 className='text-sm text-gray-300 truncate'>{item?.artist?.name}</h3>
                </Link>
              </div>
              </div>
              <PlayPause topCharts preview={item.preview} songID={item.id} songList={topChartsSongs}/>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default TopCharts