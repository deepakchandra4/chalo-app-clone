import React from "react";
import { NavLink } from "react-router-dom";
import SwiperSlider from "../Slider/SwiperSlider";
import Cities from "../Cities/Cities";

const Home = () => {
  return (
    <section className="text-gray-600 body-font  xl:mx-auto xl:max-w-7xl max-w-full">
      <div className="container mx-auto flex px-5 pt-24 pb-16 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className=" rounded-full"
            alt="hero"
            src="https://chalo.com/assets/images/mock.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            The New Way Of Bus Travel
          </h1>
          <h1 className="hidden lg:inline-block text-5xl font-bold">
            In Your City
          </h1>
          <p className="mb-8 mt-5 leading-relaxed text-justify">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex items-center bg-black text-white font-semibold p-4  focus:outline-none hover:bg-gray-100 hover:text-black rounded-3xl text-xl mt-4 md:mt-0">
              Download App
            </button>
            <NavLink to="/app-features" className="mr-5 ml-2 text-black font-semibold text-xl flex  items-center hover:underline decoration-black-500   p-2">
              Try Chalo
            </NavLink>
          </div>
        </div>
      </div>
      <SwiperSlider/>
      <Cities/>
    </section>



  );
};

export default Home;
