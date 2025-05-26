import React from "react";
import SongCardSkeleton from "./SongCardSkeleton";

const SearchResultsSkeleton = () => {
  return (
    <>
      <div>
        <div className="mt-6 mb-4 flex items-center gap-4 pl-4 xl:absolute xl:top-20 xl:left-55">
        <div className="h-6 w-30 animate-pulse rounded-2xl bg-gray-800 xl:h-10 xl:w-40"></div>
      </div>

        
      <section className="hide-scrollbar mt-4 overflow-y-scroll px-4 xl:absolute xl:top-20 xl:left-55 xl:h-[78%] xl:w-[84%]">
          <h1 className="mt-8 mb-8 h-6 w-50 xl:h-8 xl:w-150 animate-pulse rounded-2xl bg-gray-800"></h1>

          <div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchResultsSkeleton;
