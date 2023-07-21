import { NavLink } from "react-router-dom";

const Slider1 = () => {
  return (
    <div className="h-[90vh] max-sm:h-[97vh] lg:h-[70vh] md:h-[90vh] max-lg:h-[111vh] grid max-lg:grid-cols-1 max-sm:grid-cols-1  grid-cols-3 gap-0 ">
      <div className=" text-white flex justify-center flex-col max-md:p-6 max-lg:p-7 p-20">
        <p className="text-black text-3xl">Making Bus Travel better</p>
        <h1 className=" text-5xl text-black font-bold pt-2 pb-4 ">
          Chalo Products
        </h1>
      </div>

      {/* Second div */}
      <div className="h-fit flex justify-center  p-12  ">
        <img src="https://chalo.com/assets/images/page-card.png" alt="chalo"/>
      </div>

      {/* Third DIv */}
      <div className=" text-black flex justify-center flex-col max-md:p-7 pr-8 pl-8 max-lg:p-7">
        <h1 className="text-black text-3xl font-bold  pb-3 ">Chalo Card</h1>
        <p className="text-left">
          A Safe and convenient way to travel by bus.No need to worry about
          carrying change for your bus traveller again
        </p>
        <NavLink>
          <p className="underline font-bold">Read More</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Slider1;
