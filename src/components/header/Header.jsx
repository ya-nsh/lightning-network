import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <header className="border-b border-gray-100 shadow-xl">
      <div className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <span className="mr-10 cursor-pointer font-bold xs:ml-5 sm:ml-10 md:text-xl ml-10 ">
          Lightning Network
        </span>

        <div className="flex justify-end flex-1">
          <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
            <a
              href="/about"
              className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              About
            </a>

            <a
              href="/news"
              className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              Home
            </a>

            <a
              href="/products"
              className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              Network
            </a>

            <a
              href="/contact"
              className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              News
            </a>
          </nav>
        </div>

        <div className="flex items-center justify-end flex-1">
          <div className="flex items-center ml-8">
            <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
              <div className="ml-40 hidden sm:block">
                <div className="relative flex items-center">
                  <label className="sr-only" for="email">
                    Search
                  </label>

                  <input
                    className="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
                    id="search"
                    type="text"
                    placeholder="Search"
                  />

                  <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4 ">
                    <SearchIcon />
                  </span>
                </div>
              </div>
              <span>
                <a
                  href="/account"
                  className="block p-6 border-b-4 border-transparent hover:border-red-700"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span className="sr-only"> Account </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
