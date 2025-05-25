import React from 'react'

const TopArtistsSkeleton = () => {
  return (
     <section className="w-[28rem] mt-5 ">
        <h1 className="text-2xl font-bold animate-pulse bg-gray-800 h-8 w-70 rounded-2xl"></h1>
        <div className="flex gap-5 mt-4 h-40 items-start overflow-x-scroll hide-scrollbar select-none">
          <div className="shrink-0 w-30 animate-pulse h-30 group">
            <div className="bg-gray-800 rounded-full w-30 h-30"></div>
            
          </div>
          <div className="shrink-0 w-30 animate-pulse h-30 group">
            <div className="bg-gray-800 rounded-full w-30 h-30"></div>
            
          </div>
          <div className="shrink-0 w-30 animate-pulse h-30 group">
            <div className="bg-gray-800 rounded-full w-30 h-30"></div>
            
          </div>
          <div className="shrink-0 w-30 animate-pulse h-30 group">
            <div className="bg-gray-800 rounded-full w-30 h-30"></div>
            
          </div>
        </div>
      </section>
  )
}

export default TopArtistsSkeleton