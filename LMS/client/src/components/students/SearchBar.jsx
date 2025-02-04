import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

function SearchBar({data}) {
  const nevigate = useNavigate();
  const [search, setSearch] = useState(data ? data : "");
  const onSearch = (e) => {
    e.preventDefault();
    nevigate("/course-list/" + search);
  };
  return (
    <form
      onSubmit={onSearch}
      className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded"
    >
      <img src={assets.search_icon} alt="" className="md:w-auto w-10 px-3" />
      <input
        type="text"
        placeholder="Search for courses "
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-full h-full outline-none text-gray-500/80"
      />
      <button
        type="submit"
        className="bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
