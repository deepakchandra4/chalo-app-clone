import React, { useState } from "react";
import Slider2 from "./Slider2";
import Slider1 from "./Slider1";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";
import { NavLink } from "react-router-dom";

const AllSlides = () => {
  const colorChange = () => {};

  return (
    <div>
        
        <div className="flex justify-center">
      <nav className="bg-gray-200 rounded-full px-4 py-2">
        <ul className="flex text-gray-600 gap-4 font-medium py-2">
          <li>
            <NavLink
              to="slider1"
              className="rounded-full px-4 py-2 bg-white text-gray-600"
            >
              1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="slider2"
              className="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="slider3"
              className="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              3
            </NavLink>
          </li>
          <li>
            <NavLink
              to="slider4"
              className="rounded-full px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out"
            >
              4
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </div>
      
  );
};

export default AllSlides;
