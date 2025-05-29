import React from "react";
import SongDetailsSkeleton from "./SongDetailsSkeleton";

const AlbumDetailsSkeleton = () => {
  return (
    <>
      <div className="mt-6 mb-4 flex items-center gap-4 pl-4 sm:ml-[12rem] xl:absolute xl:top-20 xl:left-55 xl:mt-0 xl:ml-0">
        <div className="h-6 w-30 animate-pulse rounded-2xl bg-gray-800 xl:h-10 xl:w-40"></div>
      </div>

      <section className="hide-scrollbar mt-4 overflow-y-scroll px-4 sm:ml-[12rem] xl:absolute xl:top-30 xl:left-55 xl:ml-0 xl:h-[calc(100vh_-_12rem)] xl:w-[82%] 2xl:top-30">
        <div className="flex flex-col items-start gap-10 xl:flex-row xl:items-center">
          <div className="flex items-center gap-5">
            <div className="h-30 w-30 animate-pulse rounded-full bg-gray-800 xl:h-40 xl:w-40"></div>
            <div>
              <div className="mb-2 h-6 w-38 animate-pulse rounded-2xl bg-gray-800 xl:h-8 xl:w-48"></div>
              <div className="mb-2 h-4 w-34 animate-pulse rounded-2xl bg-gray-800 xl:h-6 xl:w-64"></div>
              <div className="h-4 w-22 animate-pulse rounded-2xl bg-gray-800 xl:h-6 xl:w-32"></div>
            </div>
          </div>

          <div className="ml-5 flex items-center gap-5 xl:ml-10">
            <div className="h-20 w-20 animate-pulse rounded-full bg-gray-800"></div>
            <h2 className="mb-2 flex animate-pulse flex-col text-xl">
              <span className="mb-2 h-4 w-24 animate-pulse rounded-2xl bg-gray-800"></span>
              <span className="h-4 w-16 animate-pulse rounded-2xl bg-gray-800"></span>
            </h2>
          </div>

          <div className="ml-5 xl:ml-10">
            <div className="mb-2 h-4 w-48 animate-pulse rounded-2xl bg-gray-800 xl:h-6"></div>
            <div className="mb-2 h-4 w-64 animate-pulse rounded-2xl bg-gray-800 xl:h-6"></div>
            <div className="h-4 w-60 animate-pulse rounded-2xl bg-gray-800 xl:h-6"></div>
          </div>
        </div>

        <div className="mt-15">
          <div className="mb-8 h-6 w-38 animate-pulse rounded-2xl bg-gray-800 xl:h-8 xl:w-48"></div>

          <div className="flex flex-wrap gap-10">
            <div className="flex items-center gap-5">
              <div className="h-25 w-25 animate-pulse rounded-full bg-gray-800 xl:h-32 xl:w-32"></div>

              <div>
                <div className="mb-2 h-6 w-38 animate-pulse rounded-2xl bg-gray-800 xl:h-8 xl:w-48"></div>
                <div className="mb-2 h-4 w-34 animate-pulse rounded-2xl bg-gray-800 xl:h-6 xl:w-64"></div>
                <div className="h-4 w-22 animate-pulse rounded-2xl bg-gray-800 xl:h-6 xl:w-32"></div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="h-25 w-25 animate-pulse rounded-full bg-gray-800 xl:h-32 xl:w-32"></div>

              <div>
                <div className="mb-2 h-6 w-38 animate-pulse rounded-2xl bg-gray-800 xl:h-8 xl:w-48"></div>
                <div className="mb-2 h-4 w-34 animate-pulse rounded-2xl bg-gray-800 xl:h-6 xl:w-64"></div>
                <div className="h-4 w-22 animate-pulse rounded-2xl bg-gray-800 xl:h-6 xl:w-32"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-15">
          <div className="mb-8 h-6 w-38 animate-pulse rounded-2xl bg-gray-800 xl:h-8 xl:w-48"></div>
          <div className="flex flex-wrap gap-10">
            <div className="flex items-center gap-5">
              <div className="h-25 w-25 animate-pulse rounded-full bg-gray-800 xl:h-32 xl:w-32"></div>

              <div>
                <div className="mb-2 h-6 w-38 animate-pulse rounded-2xl bg-gray-800 xl:h-8 xl:w-48"></div>
                <div className="mb-2 h-4 w-34 animate-pulse rounded-2xl bg-gray-800 xl:h-6 xl:w-64"></div>
                <div className="h-4 w-22 animate-pulse rounded-2xl bg-gray-800 xl:h-6 xl:w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbumDetailsSkeleton;
