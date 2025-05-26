import React, { useContext } from "react";
import { logo } from "../assets/assets";
import { GoHome } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { setSearchResults } from "../redux/slice/playerSlice";
import { RxCross2 } from "react-icons/rx";

const SidebarSkeleton = () => {
  return (
    <aside className="hidden xl:block absolute top-0 bottom-0 left-0 w-[12rem] bg-[#141414] p-4"></aside>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    setInput,
    setSearchQuery,
    top10Fetching,
    albumsFetching,
    playlistFetching,
    showSidebar,
    setShowSidebar,
  } = useContext(PlayerContext);

  function handleHomeBtn() {
    navigate("/");
    // dispatch(setSearchResults([]));
    setSearchQuery("");
    setInput("");
  }

  if (top10Fetching || albumsFetching || playlistFetching) {
    return <SidebarSkeleton />;
  }

  return (
    <>
      <section
        onClick={() => setShowSidebar(false)}
        className={`absolute top-0 bottom-0 left-0 h-screen z-50 w-screen bg-black/50 transition-opacity duration-300 ${
          showSidebar
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <aside
          className={`absolute top-0 bottom-0 w-[12rem] bg-[#141414] transition-all duration-300 xl:hidden ${
            showSidebar ? "left-0" : "-left-[12rem]"
          }`}
        >
          <div className="mt-5 mr-5 flex justify-end text-white">
            <RxCross2 onClick={() => setShowSidebar(false)} size={30} />
          </div>
          <div>
            <div className="mt-4 flex items-center justify-center gap-2 hover:cursor-pointer">
              <img className="w-10" src={logo} alt="Musify logo" />
              <h1 className="text-2xl font-bold text-white">Musify</h1>
            </div>

            <div className="mt-15 ml-10 text-lg text-gray-400 hover:cursor-pointer hover:text-cyan-400">
              <Link onClick={handleHomeBtn} to={"/"}>
                <h2 className="flex items-center gap-2">
                  <GoHome /> <p>Discover</p>
                </h2>
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <aside className="absolute top-0 bottom-0 left-0 hidden w-[12rem] bg-[#141414] p-4 xl:block">
        <div className="mt-4 flex items-center justify-center gap-2 hover:cursor-pointer">
          <img className="w-12" src={logo} alt="Musify logo" />
          <h1 className="text-3xl font-bold text-white">Musify</h1>
        </div>

        <div className="mt-15 ml-4 text-lg text-gray-400 hover:cursor-pointer hover:text-cyan-400">
          <Link onClick={handleHomeBtn} to={"/"}>
            <h2 className="flex items-center gap-2">
              <GoHome /> <p>Discover</p>
            </h2>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
