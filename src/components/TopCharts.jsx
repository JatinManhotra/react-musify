import React, { useContext } from 'react'
import PlayPause from './PlayPause'
import { PlayerContext } from '../context/PlayerContext'
import { useSelector } from 'react-redux'

const TopCharts = () => {

  const {topChartsSongs} = useContext(PlayerContext)
  const {} = useSelector((state)=>state.player)
  // console.log(topChartsSongs)

  return (
    <section className='w-[28rem]'>
      <h1 className='text-2xl font-bold text-white'>Top Charts</h1>
      <div>
        {
          topChartsSongs?.map((item,index)=>(
            <div key={index} className='flex items-center  justify-between px-4 py-2 rounded-lg text-white hover:bg-[#4b456e] mt-2 pr-8 '>
              <div className='flex items-center gap-4'>
              <p>{index+1}.</p>
              <img className='w-15 rounded-lg ' src={`https://e-cdns-images.dzcdn.net/images/cover/${item?.md5_image}/1000x1000.jpg`} alt="topCharts" />
              <div>
                <h2 className='font-bold text-lg truncate'>{item?.title}</h2>
                <h3 className='text-sm text-gray-300 truncate'>{item?.artist?.name}</h3>
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