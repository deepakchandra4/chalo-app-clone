import React from "react";

const Mobilepass = () => {
  return (
    <div className="grid max-md:pb-[62rem] max-lg:pb-[62rem] h-[90vh]  grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 xl:mx-auto xl:max-w-7xl max-w-full">
      <div className="flex justify-center lg:pt-10 lg:items-center h-[95%]">
        <div className="border-slate-300 md:border-2  rounded-full lg:p-20 max-md:pt-10 ">
          <img
            src="https://chalo.com/assets/images/page-mobile-pass.png"
            alt=""
            className="xl:h-[60vh] "
          />
        </div>
      </div>

      <div className=" h-[95%] p-2 lg:pt-20 ">
        <div className="p-16 max-md:p-2">
          <h2 className="text-2xl pt-4 md:p-2 max-md:font-bold md:texl-4xl">
            Experience The Convenience Of
          </h2>
          <h1 className="font-extrabold text-4xl pt-4 md:p-2">
            Mobile Bus Pass
          </h1>

          <p className="font-normal text-xl pt-4 md:p-2">
            Buy your mobile bus pass on the Chalo App, and you will never have
            to visit the pass counter or wait in the queue ever again.
          </p>

          <p className="font-normal text-xl pt-4 md:p-2">
            What's more, travelling with a mobile bus pass is safer than paying
            cash in the bus. Just show your pass on your mobile and scan the QR
            code to travel.
          </p>

          <div className="lg:flex pt-3">
            <button className="items-center bg-black text-white max-md:p-4  font-semibold py-2 px-8 focus:outline-none hover:text-black hover:bg-gray-300 rounded-3xl text-base mt-4 md:mt-0">
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilepass;
