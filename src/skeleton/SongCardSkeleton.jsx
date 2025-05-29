import React from "react";

const SongCardSkeleton = () => {
  return (
    <div className="">
      <div className="max-w-[12rem] min-w-[12rem] animate-pulse rounded-lg bg-gray-800 p-4 lg:max-w-[14rem] lg:min-w-[14rem] xl:max-w-[12rem] xl:min-w-[12rem]">
        <div className="group relative">
          <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-700"></div>
          <div className="absolute inset-0 flex items-center justify-center"></div>
          <div className="h-[10rem] w-full animate-pulse rounded bg-gray-700 lg:h-[13rem] xl:h-[10rem]"></div>
        </div>
        <div className="mt-4">
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-700"></div>
        </div>
        <div className="mt-2">
          <div className="h-3 w-1/2 animate-pulse rounded bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default SongCardSkeleton;
