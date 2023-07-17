import React from "react";

const Navbar = () => {
  return (
    
      <header className="text-gray-600 body-font bg-black fluid">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl text-white">Chalo</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 text-white hover:bg-gray-700 rounded-3xl p-2">First Link</a>
      <a className="mr-5   text-white hover:bg-gray-700 rounded-3xl p-2">Second Link</a>
      <a className="mr-5   text-white hover:bg-gray-700 rounded-3xl p-2">Third Link</a>
      <a className="mr-5   text-white hover:bg-gray-700 rounded-3xl p-2">Fourth Link</a>
    </nav>

    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

  );
};

export default Navbar;
