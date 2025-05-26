import React from "react";

const TopArtistsSkeleton = () => {
  return (
    <section className="mt-5 overflow-x-hidden xl:w-[28rem]">
      <h1 className="mb-4 h-6 w-40 animate-pulse rounded-2xl bg-gray-800 text-3xl font-bold xl:h-8 xl:w-70"></h1>
      <div className="hide-scrollbar mt-4 flex h-40 items-start gap-5 overflow-x-scroll select-none">
        <div className="group h-25 w-25 shrink-0 animate-pulse xl:h-30 xl:w-30">
          <div className="h-25 w-25 rounded-full bg-gray-800 xl:h-30 xl:w-30"></div>
        </div>
        <div className="group h-25 w-25 shrink-0 animate-pulse xl:h-30 xl:w-30">
          <div className="xl:w-30 rounded-full h-25 w-25 bg-gray-800 xl:h-30"></div>
        </div>
        <div className="group xl:w-30shrink-0 h-25 w-25 animate-pulse xl:h-30">
          <div className="h-25 w-25 rounded-full bg-gray-800 xl:h-30 xl:w-30"></div>
        </div>
        <div className="group h-25 w-25 shrink-0 animate-pulse xl:h-30 xl:w-30">
          <div className="h-25 w-25 rounded-full bg-gray-800 xl:h-30 xl:w-30"></div>
        </div>
      </div>
    </section>
  );
};

export default TopArtistsSkeleton;
