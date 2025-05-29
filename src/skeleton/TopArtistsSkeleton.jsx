import React from "react";

const TopArtistsSkeleton = () => {
  return (
    <section className="mt-5 xl:ml-[1rem] xl:w-[26rem] overflow-x-hidden 2xl:w-[28rem]">
      <h1 className="mb-4 h-6 w-40 animate-pulse rounded-2xl bg-gray-800 text-3xl font-bold xl:h-8 xl:w-70"></h1>
      <div className="hide-scrollbar mt-4 flex h-40 lg:h-45 items-start gap-5 overflow-x-scroll select-none">
        <div className="group h-25 w-25 shrink-0 animate-pulse lg:h-25 lg:w-25">
          <div className="h-25 w-25 rounded-full bg-gray-800 lg:h-25 lg:w-25"></div>
        </div>
        <div className="group h-25 w-25 shrink-0 animate-pulse lg:h-25 lg:w-25">
          <div className="h-25 w-25 rounded-full bg-gray-800 lg:h-25 lg:w-25"></div>
        </div>
        <div className="group h-25 w-25 shrink-0 animate-pulse lg:h-25 lg:w-25">
          <div className="h-25 w-25 rounded-full bg-gray-800 lg:h-25 lg:w-25"></div>
        </div>
        <div className="group h-25 w-25 shrink-0 animate-pulse lg:h-25 lg:w-25">
          <div className="h-25 w-25 rounded-full bg-gray-800 lg:h-25 lg:w-25"></div>
        </div>
      </div>
    </section>
  );
};

export default TopArtistsSkeleton;
