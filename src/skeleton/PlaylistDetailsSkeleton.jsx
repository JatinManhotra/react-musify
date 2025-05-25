import React from 'react'
import SongCardSkeleton from './SongCardSkeleton'

const PlaylistDetailsSkeleton = () => {
  return (
    <>
      <div className="absolute top-20 left-55 mb-4 flex items-center gap-4">
        <div className="h-10 w-40 animate-pulse rounded-2xl bg-gray-800"></div>
      </div>

      <section className="hide-scrollbar absolute top-35 left-55 h-[78%] w-[83%] overflow-y-hidden pb-10">
        <div className="flex items-center gap-10">

          <div className="flex items-center gap-5">
            <div className="h-40 w-40 animate-pulse rounded-full bg-gray-800"></div>
            <div>
              <div className="mb-2 h-8 w-48 animate-pulse rounded-2xl bg-gray-800"></div>
              <div className="mb-2 h-6 w-64 animate-pulse rounded-2xl bg-gray-800"></div>
              
            </div>
          </div>

          <div className="ml-10 flex items-center gap-5">
           
            <h2 className="mb-2 flex animate-pulse flex-col text-xl">
              <div className="mb-2 h-5 w-64 animate-pulse rounded-2xl bg-gray-800"></div>
              <div className="h-5 w-60 animate-pulse rounded-2xl bg-gray-800"></div>
            </h2>
          </div>

          <div className="ml-10">
            
              <div className="mb-2 h-5 w-64 animate-pulse rounded-2xl bg-gray-800"></div>
              <div className="h-5 w-60 animate-pulse rounded-2xl bg-gray-800"></div>
          </div>
        </div>

        <h1 className="mt-8 mb-8 animate-pulse bg-gray-800 h-8 w-40 rounded-2xl"></h1>
      
          <div className="flex w-full flex-wrap gap-4">
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
            <SongCardSkeleton/>
          </div>
      </section>
    </>
  )
}

export default PlaylistDetailsSkeleton