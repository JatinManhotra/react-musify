import React from 'react'
import SongCardSkeleton from './SongCardSkeleton'

const DiscoverSkeleton = () => {
  return (
    <section className="xl:absolute px-4 mt-4 xl:top-20 xl:left-55 xl:h-[87%] xl:w-[50%] overflow-y-scroll hide-scrollbar">
        <h1 className="text-3xl font-bold bg-gray-800 animate-pulse h-6 xl:h-8 mb-4 w-40 xl:w-70 rounded-2xl"></h1>
        <div className="hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-scroll py-4 select-none">
          <SongCardSkeleton/>
          <SongCardSkeleton/>
          <SongCardSkeleton/>
        </div>
      
        <h1 className="text-3xl font-bold bg-gray-800 animate-pulse h-6 xl:h-8 mb-4 w-40 xl:w-70 rounded-2xl"></h1>
        <div className="hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-scroll py-4 select-none">
           <SongCardSkeleton/>
          <SongCardSkeleton/>
          <SongCardSkeleton/>
        </div>
      
       <h1 className="text-3xl font-bold bg-gray-800 animate-pulse h-6 xl:h-8 mb-4 w-40 xl:w-70 rounded-2xl"></h1>
        <div className="hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-scroll py-4 select-none">
           <SongCardSkeleton/>
          <SongCardSkeleton/>
          <SongCardSkeleton/>
        </div>
      </section>
  )
}

export default DiscoverSkeleton