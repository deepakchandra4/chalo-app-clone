import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {  NavLink } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="navbar text-gray-600 body-font bg-black mx-auto">
      <div className="xl:mx-auto xl:max-w-7xl max-w-full mx-auto flex flex-wrap p-3 flex-col md:flex-row  ">
        <div>
          <div className="flex">
            <div className="md:hidden">
              <button
                className="text-white p-2 rounded-full border-r-2 "
                onClick={() => setNav(!nav)}
              >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
              </button>
            </div>
            <NavLink to="/" smooth duration={500}>
              <h1 className="mt-1 ml-2 text-3xl text-white">Chalo</h1>
            </NavLink>
          </div>
        </div>

        <ul className="hidden md:flex ">
          <li className="px-2 cursor-pointer">
            <NavLink
              to="/chalo-app"
              smooth
              duration={500}
              className="mr-3  text-xl text-white hover:bg-gray-700 rounded-3xl p-2"
            >
              Chalo App
            </NavLink>
          </li>
          <li className="px-2  cursor-pointer">
            <NavLink
              to="/chalo-card"
              smooth
              duration={500}
              className="mr-3 text-xl  text-white hover:bg-gray-700 rounded-3xl p-2"
            >
              Chalo Card
            </NavLink>
          </li>
          <li className="px-2 cursor-pointer">
            <NavLink
              to="chalo-app/mobile-pass"
              smooth
              duration={500}
              className="mr-3 text-xl  text-white hover:bg-gray-700 rounded-3xl p-2"
            >
              Mobile Pass
            </NavLink>
          </li>
          <li className="px-2 cursor-pointer">
            <NavLink
              to="chalo-app/mobile-ticket"
              smooth
              duration={500}
              className="mr-3 text-xl  text-white hover:bg-gray-700 rounded-3xl p-2"
            >
              Mobile Ticket
            </NavLink>
          </li>
        </ul>

        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-2">
          
          <NavLink to="/signup">
            <button className=" items-center hidden md:flex bg-gray-100 font-semibold py-2 px-3 text focus:outline-none hover:bg-gray-300 rounded-3xl text-base mt-3 md:mt-0">
              Login/Signup
            </button>
          </NavLink>
          <button className=" items-center hidden md:flex bg-gray-100 font-semibold py-2 px-3  focus:outline-none hover:bg-gray-300 rounded-3xl text-base mt-4 md:mt-0">
            Download App
          </button>
        </div>
      </div>

      {nav && (
        <ul className="md:hidden flex flex-col justify-start items-start ml-4 pb-5 top-20 left-0 bg-black text-white">
          <li className="text-xl cursor-pointer">
            <NavLink to="" smooth duration={500} onClick={() => setNav(false)}>
              Chalo App
              <ul className="text-base pt-2 ml-5">
                <li className="py-1">
                  <NavLink to="">Track Your Bus Live</NavLink>
                </li>
                <li className="py-1">
                  <NavLink to="/mobilepass">Mobile Bus Pass</NavLink>
                </li>
                <li className="py-1">
                  <NavLink to="/mobileticket">Mobile Bus Ticket</NavLink>
                </li>
              </ul>
            </NavLink>
          </li>
          <li className="py-2 text-xl cursor-pointer">
            <NavLink
              to="/chalo-card"
              smooth
              duration={500}
              onClick={() => setNav(false)}
            >
              Chalo Card
            </NavLink>
          </li>
          <li className="py-2 text-xl cursor-pointer">
            <NavLink to="/" smooth duration={500} onClick={() => setNav(false)}>
              Chalo Bus
            </NavLink>
          </li>
          <li className="py-2 text-xl cursor-pointer">
            <NavLink to="" smooth duration={500} onClick={() => setNav(false)}>
              Super Saver
            </NavLink>
          </li>
          <li className="py-2 text-xl cursor-pointer">
            <NavLink
              to="allcities"
              smooth
              duration={500}
              onClick={() => setNav(false)}
            >
              Chalo Cities
            </NavLink>
          </li>
          <li className="py-2 text-xl cursor-pointer underline">
            <NavLink
              to="app-features"
              smooth
              duration={500}
              onClick={() => setNav(false)}
            >
              Try Chalo
            </NavLink>
          </li>
          <li>
            <div className="lg:w-2/5 inline-flex lg:justify-center gap-2 lg:ml-0">
              <NavLink to="/signup">
                <button className=" items-center  bg-gray-100 font-semibold py-2 px-3 text-black focus:outline-none hover:bg-gray-300 rounded-3xl text-base mt-3 md:mt-0">
                  Login/Signup
                </button>
              </NavLink>
              <button className=" items-center  bg-gray-100 font-semibold py-2 px-3 text-black focus:outline-none hover:bg-gray-300 rounded-3xl text-base mt-3 md:mt-0">
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
