import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="absolute top-5 left-55 w-[30rem] rounded-full border-2 border-gray-600 bg-transparent px-2 py-1">
      <div className="flex items-center gap-2 text-gray-200">
        <CiSearch size={25} />
        <input
          className="mr-5 w-full border-none text-white outline-none placeholder:text-gray-600"
          type="text"
          placeholder="Search"
          name="search-field"
          id="search-field"
        />
      </div>
    </nav>
  );
};

export default Navbar;
