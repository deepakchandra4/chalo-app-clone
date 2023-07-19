import React from "react";

const ChaloCard = () => {
  return (
    <div className="grid max-md:pb-[62rem] max-lg:pb-[62rem] h-[90vh]  grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 xl:mx-auto xl:max-w-7xl max-w-full">
      <div className="flex justify-center lg:pt-10 lg:items-center h-[95%]">
        <div className="border-slate-300 md:border-2  rounded-full lg:p-20 max-md:pt-10 ">
          <img
            src="https://chalo.com/assets/images/Chalo-Card-page.png"
            alt=""
            className="xl:h-[60vh] "
          />
        </div>
      </div>

      <div className=" h-[95%] p-2 lg:pt-20 ">
        <div className="p-16 max-md:p-2">
          <h2 className="text-2xl pt-4 md:p-2 max-md:font-bold md:texl-4xl">
            Experience Contactless Payments
          </h2>
          <h1 className="font-extrabold text-4xl pt-4 md:p-2">Chalo Card</h1>


          <p className="font-normal text-xl pt-4 md:p-2">
            Travel safer with the tap-to-pay contactless Chalo Card. Store your
            bus tickets, bus pass and Chalo Super Saver plans on your Chalo Card
            and pay conveniently for your bus travel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChaloCard;
