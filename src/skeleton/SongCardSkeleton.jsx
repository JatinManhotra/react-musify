import React from 'react'

const SongCardSkeleton = () => {
  return (
    <div className="">
        <div className="max-w-[12rem] xl:max-w-[15rem] min-w-[12rem] xl:min-w-[15rem] rounded-lg bg-gray-800 p-4  animate-pulse">
          <div className="group relative">
            <div className="rounded-lg bg-gray-700 aspect-w-1 aspect-h-1"></div>
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
              <div className=' bg-gray-700 rounded w-full h-[10rem] xl:h-[13rem] animate-pulse'></div>
          </div>
          <div className="mt-4">
            <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
          </div>
          <div className="mt-2">
            <div className="h-3 bg-gray-700 rounded w-1/2 animate-pulse"></div>
          </div>
        </div>
      </div>
  )
}

export default SongCardSkeleton