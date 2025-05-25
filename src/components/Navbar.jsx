import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useGetSearchResultsQuery } from "../redux/services/deezer";
import { Navigate, useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import {
  setSearchResults,
  setSearchResultsStatus,
} from "../redux/slice/playerSlice";
import { useSelector } from "react-redux";
import { IoMdMenu } from "react-icons/io";

const NavbarSkeleton = () => {
  return (
    <nav className="absolute top-5 left-55 h-9 w-[30rem] rounded-full border-2 border-gray-600 bg-transparent px-2 py-1"></nav>
  );
};

const Navbar = () => {
  const navigate = useNavigate();

  const {
    dispatch,
    input,
    setInput,
    searchQuery,
    setSearchQuery,
    top10Fetching,
    albumsFetching,
    playlistFetching,showSidebar, setShowSidebar
  } = useContext(PlayerContext);

  const {
    data: searchResults,
    isFetching,
    error,
  } = useGetSearchResultsQuery(searchQuery, { skip: !searchQuery });

  const { searchResultsStatus } = useSelector((state) => state.player);

  function handleSearch(e) {
    if (input.trim() && e.key === "Enter") {
      setSearchQuery(input.trim());
    }
  }

  useEffect(() => {
    if (searchResults && searchQuery) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  }, [searchQuery, searchResults]);

  useEffect(() => {
    if (!searchResults) return;
    dispatch(setSearchResults(searchResults));
    dispatch(setSearchResultsStatus({ isFetching: isFetching, error: error }));
  }, [searchResults, isFetching, error]);

  if (top10Fetching || albumsFetching || playlistFetching) {
    return <NavbarSkeleton />;
  }

  return (
    <>
      <section className="mt-4 flex items-center justify-between">
        <nav className="mx-auto w-[80%] rounded-full border-2 border-gray-600 bg-transparent px-2 py-1 text-sm xl:absolute xl:top-5 xl:left-55 xl:w-[30rem]">
          <div className="flex items-center gap-2 text-gray-200">
            <CiSearch className="text-lg xl:text-2xl" />
            <input
              className="mr-5 w-full border-none text-white outline-none placeholder:text-gray-600"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search"
              name="search-field"
              id="search-field"
            />
          </div>
        </nav>
        <IoMdMenu onClick={()=>setShowSidebar(true)} size={30} className="mr-3 text-white" />
      </section>
    </>
  );
};

export default Navbar;
