import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="navbar text-gray-600 body-font bg-black mx-auto">
      <div className="xl:mx-auto xl:max-w-7xl max-w-full mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center ">
        <div>
          <Link to="" smooth duration={500}>
            <h1 className="ml-3 text-3xl text-white">Chalo</h1>
          </Link>

        </div>

        <ul className="hidden md:flex ">
          <li className="px-4 cursor-pointer">
            <Link
              to=""
              smooth
              duration={500}
              className="mr-5  text-xl text-white hover:bg-gray-700 rounded-3xl p-2"
            >
              Chalo App
            </Link>
          </li>
          <li className="px-2  cursor-pointer">
            <Link
              to=""
              smooth
              duration={500}
              className="mr-5 text-xl  text-white hover:bg-gray-700 rounded-3xl p-2"
            >
              Chalo Card
            </Link>
          </li>
          <li className="px-2 cursor-pointer">
            <Link
              to=""
              smooth
              duration={500}
              className="mr-5 text-xl  text-white hover:bg-gray-700 rounded-3xl p-2"
            >
              Mobile Pass
            </Link>
          </li>
          <li className="px-2 cursor-pointer">
            <Link
              to=""
              smooth
              duration={500}
              className="mr-5 text-xl  text-white hover:bg-gray-700 rounded-3xl p-2"
            >
              Mobile Ticket
            </Link>
          </li>
          
        </ul>

        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className=" items-center hidden md:flex bg-gray-100 font-semibold p-3  focus:outline-none hover:bg-gray-300 rounded-3xl text-base mt-4 md:mt-0">
            Download App
          </button>
        </div>
        

        <div className="md:hidden">
          <button
            className="text-gray-500 p-2 focus:outline-none "
            onClick={() => setNav(!nav)}
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {nav && (
        <ul className="md:hidden flex flex-col justify-start items-start ml-4 pb-5 top-20 left-0 bg-black text-white">
          <li className="text-xl cursor-pointer">
            <Link to="" smooth duration={500} onClick={() => setNav(false)}>
              Chalo App
              <ul className="text-base pt-2 ml-5">
                <li className="py-1">Track Your Bus Live</li>
                <li className="py-1">Mobile Bus Pass</li>
                <li className="py-1">Mobile Ticket</li>
              </ul>
            </Link>
            
          </li>
          <li className="py-2 text-xl cursor-pointer">
            <Link to="" smooth duration={500} onClick={() => setNav(false)}>
              Chalo Card
            </Link>
          </li>
          <li className="py-2 text-xl cursor-pointer">
            <Link to="" smooth duration={500} onClick={() => setNav(false)}>
              Chalo Bus
            </Link>
          </li>
          <li className="py-2 text-xl cursor-pointer">
            <Link to="" smooth duration={500} onClick={() => setNav(false)}>
              Super Saver
            </Link>
          </li>
          <li className="py-2 text-xl cursor-pointer">
            <Link to="" smooth duration={500} onClick={() => setNav(false)}>
              Chalo Cities
            </Link>
          </li>
          <li className="py-2 text-xl cursor-pointer underline">
            <Link to="" smooth duration={500} onClick={() => setNav(false)}>
              Try Chalo
            </Link>
          </li>
          <li>
          <div className="lg:w-2/5 inline-flex lg:justify-center  lg:ml-0">
          <button className=" items-center  bg-gray-100 font-semibold p-3 text-black focus:outline-none hover:bg-gray-300 rounded-3xl text-base mt-3 md:mt-0">
            Download App
          </button>
        </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
