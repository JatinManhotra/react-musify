import React from 'react'
import SongCardSkeleton from './SongCardSkeleton'

const DiscoverSkeleton = () => {
  return (
    <section className="absolute top-20 left-55 h-[87%] w-[50%] overflow-y-scroll hide-scrollbar">
        <h1 className="text-3xl font-bold bg-gray-800 animate-pulse h-8 mb-4 w-70 rounded-2xl"></h1>
        <div className="hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-scroll py-4 select-none">
          <SongCardSkeleton/>
          <SongCardSkeleton/>
          <SongCardSkeleton/>
        </div>
      
        <h1 className="text-3xl font-bold bg-gray-800 animate-pulse h-8 mb-4 w-70 rounded-2xl"></h1>
        <div className="hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-scroll py-4 select-none">
           <SongCardSkeleton/>
          <SongCardSkeleton/>
          <SongCardSkeleton/>
        </div>
      
        <h1 className="text-3xl font-bold bg-gray-800 animate-pulse h-8 mb-4 w-70 rounded-2xl"></h1>
        <div className="hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-scroll py-4 select-none">
           <SongCardSkeleton/>
          <SongCardSkeleton/>
          <SongCardSkeleton/>
        </div>
      </section>
  )
}

export default DiscoverSkeleton