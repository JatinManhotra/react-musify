import React from "react";
import SongCardSkeleton from "./SongCardSkeleton";

const DiscoverSkeleton = () => {
  return (
    <section className="hide-scrollbar mt-4 overflow-y-scroll px-4 sm:ml-[12rem] xl:absolute xl:top-20 xl:left-52 xl:ml-0 xl:h-[calc(100vh_-_7rem)] xl:w-[49%]">
      <h1 className="mb-4 h-6 w-40 animate-pulse rounded-2xl bg-gray-800 text-3xl font-bold xl:h-8 xl:w-70"></h1>
      <div className="hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-hidden py-4 select-none">
        <SongCardSkeleton />
        <SongCardSkeleton />
        <SongCardSkeleton />
        <SongCardSkeleton />
      </div>

      <h1 className="mb-4 h-6 w-40 animate-pulse rounded-2xl bg-gray-800 text-3xl font-bold xl:h-8 xl:w-70"></h1>
      <div className="hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-hidden py-4 select-none">
        <SongCardSkeleton />
        <SongCardSkeleton />
        <SongCardSkeleton />
        <SongCardSkeleton />
      </div>

      <h1 className="mb-4 h-6 w-40 animate-pulse rounded-2xl bg-gray-800 text-3xl font-bold xl:h-8 xl:w-70"></h1>
      <div className="hide-scrollbar mb-5 flex shrink-0 gap-5 overflow-x-hidden py-4 select-none">
        <SongCardSkeleton />
        <SongCardSkeleton />
        <SongCardSkeleton />
        <SongCardSkeleton />
      </div>
    </section>
  );
};

export default DiscoverSkeleton;
