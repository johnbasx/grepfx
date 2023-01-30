import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className='relative hidden ml-4 lg:block'>
      <label htmlFor='UserEmail' className='sr-only'>
        Email
      </label>
      <span className='absolute inset-y-0 left-0 grid w-10 text-gray-400 pointer-events-none place-content-center'>
        <IoSearch />
      </span>
      <input
        type='search'
        id='search'
        placeholder='Search here...'
        className='w-full px-3 py-2.5 pl-10 text-white border-gray-700 rounded-lg shadow-sm outline-none mr-14 bg-zinc-800 sm:text-sm focus:outline-zinc-700 focus:border-main-back'
      />
    </div>
  );
};

export default SearchBar;
