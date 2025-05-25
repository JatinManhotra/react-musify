import React from 'react'
import SongCardSkeleton from './SongCardSkeleton'

const SearchResultsSkeleton = () => {
  return (
    <section>
<div className="">
        <div className="absolute top-20 left-55 mb-4 flex items-center gap-4">
          
          <div className="animate-pulse bg-gray-800 h-10 w-40 rounded-2xl"></div>
        </div>
      
        <section className="hide-scrollbar absolute top-35 left-55 h-[78%] w-[84%] overflow-y-scroll pb-10">
          <h1 className="mt-8 mb-8 animate-pulse bg-gray-800 h-8 w-150 rounded-2xl"></h1>
      
          <div className="flex w-full flex-wrap gap-5">
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
          </div>
        </section>
      </div>
    </section>
  )
}

export default SearchResultsSkeleton