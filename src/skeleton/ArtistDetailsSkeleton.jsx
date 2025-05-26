import React from "react";
import SongCardSkeleton from "./SongCardSkeleton";

const ArtistDetailsSkeleton = () => {
  return (
    <>
      <div className="mt-6 mb-4 flex items-center gap-4 pl-4 xl:absolute xl:top-20 xl:left-55">
        <div className="h-6 w-30 animate-pulse rounded-2xl bg-gray-800 xl:h-10 xl:w-40"></div>
      </div>

      <section className="hide-scrollbar mt-4 overflow-y-scroll px-4 xl:absolute xl:top-20 xl:left-55 xl:h-[78%] xl:w-[83%]">
        <div className="flex items-center gap-5">
          <div className="h-30 w-30 animate-pulse rounded-full bg-gray-800 xl:h-40 xl:w-40"></div>
          <div>
            <div className="mb-2 h-6 w-38 animate-pulse rounded-2xl bg-gray-800 xl:h-8 xl:w-48"></div>
            <div className="mb-2 h-4 w-34 animate-pulse rounded-2xl bg-gray-800 xl:h-6 xl:w-64"></div>
            <div className="h-4 w-22 animate-pulse rounded-2xl bg-gray-800 xl:h-6 xl:w-32"></div>
          </div>
        </div>

        <div className="mt-15">
          <div className="flex items-start justify-between">
            <div className="mb-8 h-6 w-40 animate-pulse rounded-2xl bg-gray-800 xl:h-8 xl:w-150"></div>
            <div className="h-6 w-20 animate-pulse rounded-2xl bg-gray-800 xl:h-10 xl:w-30"></div>
          </div>
          <div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
            <div className="my-4 mt-2 flex h-12 animate-pulse items-center justify-between rounded-lg bg-gray-800 px-4 py-2 pr-8 xl:h-17"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtistDetailsSkeleton;
