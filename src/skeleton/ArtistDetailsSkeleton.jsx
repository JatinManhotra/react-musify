import React from "react";
import SongCardSkeleton from "./SongCardSkeleton";

const ArtistDetailsSkeleton = () => {
  return (
    <>
      <div className="absolute top-20 left-55 mb-4 flex items-center gap-4">
        <div className="h-10 w-40 animate-pulse rounded-2xl bg-gray-800"></div>
      </div>

      <section className="hide-scrollbar absolute top-35 left-55 h-[78%] w-[83%] overflow-y-hidden pb-10">
        <div className="flex items-center gap-5">
          <div className="h-40 w-40 animate-pulse rounded-full bg-gray-800"></div>
          <div>
            <div className="mb-2 h-8 w-48 animate-pulse rounded-2xl bg-gray-800"></div>
            <div className="mb-2 h-6 w-64 animate-pulse rounded-2xl bg-gray-800"></div>
            <div className="h-6 w-32 animate-pulse rounded-2xl bg-gray-800"></div>
          </div>
        </div>

        <div className="mt-15">
          <div className="flex justify-between items-start">
            <div className="mb-8 h-8 w-150 animate-pulse rounded-2xl bg-gray-800"></div>
            <div className="h-10 w-30 animate-pulse rounded-2xl bg-gray-800"></div>
          </div>
          <div className="flex flex-wrap gap-4">
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
        </div>
      
      </section>
    </>
  );
};

export default ArtistDetailsSkeleton;
