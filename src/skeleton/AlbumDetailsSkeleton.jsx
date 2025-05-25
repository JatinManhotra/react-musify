import React from "react";
import SongDetailsSkeleton from "./SongDetailsSkeleton";

const AlbumDetailsSkeleton = () => {
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
              <div className="h-6 w-32 animate-pulse rounded-2xl bg-gray-800"></div>
            </div>
          </div>

          <div className="ml-10 flex items-center gap-5">
            <div className="h-20 w-20 animate-pulse rounded-full bg-gray-800"></div>
            <h2 className="mb-2 flex animate-pulse flex-col text-xl">
              <span className="mb-2 h-4 w-24 animate-pulse rounded bg-gray-800"></span>
              <span className="h-4 w-16 animate-pulse rounded bg-gray-800"></span>
            </h2>
          </div>

          <div className="ml-10">
            <div className="mb-2 h-6 w-48 animate-pulse rounded-2xl bg-gray-800"></div>
              <div className="mb-2 h-6 w-64 animate-pulse rounded-2xl bg-gray-800"></div>
              <div className="h-6 w-60 animate-pulse rounded-2xl bg-gray-800"></div>
          </div>
        </div>

        <div className="mt-15">
          <div className="mb-8 h-8 w-48 animate-pulse rounded-2xl bg-gray-800"></div>
          <div className="flex flex-wrap gap-10">
            <div className="flex items-center gap-5">
              <div className="h-32 w-32 animate-pulse rounded-full bg-gray-800"></div>
              <div>
                <div className="mb-2 h-6 w-38 animate-pulse rounded-2xl bg-gray-800"></div>
                <div className="mb-2 h-5 w-32 animate-pulse rounded-2xl bg-gray-800"></div>
                <div className="h-5 w-26 animate-pulse rounded-2xl bg-gray-800"></div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="h-32 w-32 animate-pulse rounded-full bg-gray-800"></div>
              <div>
                <div className="mb-2 h-6 w-38 animate-pulse rounded-2xl bg-gray-800"></div>
                <div className="mb-2 h-5 w-32 animate-pulse rounded-2xl bg-gray-800"></div>
                <div className="h-5 w-26 animate-pulse rounded-2xl bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-15">
          <div className="mb-8 h-8 w-48 animate-pulse rounded-2xl bg-gray-800"></div>
          <div className="flex flex-wrap gap-10">
            <div className="flex items-center gap-5">
              <div className="h-32 w-32 animate-pulse rounded-full bg-gray-800"></div>
              <div>
                <div className="mb-2 h-6 w-38 animate-pulse rounded-2xl bg-gray-800"></div>
                <div className="mb-2 h-5 w-32 animate-pulse rounded-2xl bg-gray-800"></div>
                <div className="h-5 w-26 animate-pulse rounded-2xl bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbumDetailsSkeleton;
