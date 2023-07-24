import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BusPass = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
  return (
    <div className="bg-slate-100">
      <div className="p-4  shadow-md mb- flex items-center  ">
        <FaArrowLeft className=" ml-2 mr-4  text-xl" onClick={goBack} />
        <h1 className="text-xl font-bold">Select Product Type</h1>
      </div>
      <div className="px-4 py-1 cursor-pointer">
        <div className="shadow-lg p-4">
          <h1 className="text-lg font-medium"> Super Saver plan</h1>
          <p className="text-sm">Cheapest way to travel</p>
        </div>
      </div>
      <div className="px-4 py-3 cursor-pointer">
        <div className="shadow-lg p-4">
          <h1 className="text-lg font-medium"> One Day Ticket</h1>
          <p className="text-sm">Enjoy unlimited rides in a day with a day ticket</p>
        </div>
      </div>
      <div className="px-4 py-3 cursor-pointer ">
        <div className="  shadow-lg p-4">
          <h1 className="text-lg font-medium"> Bus Pass</h1>
          <p className="text-sm">Monthly passes for general and special categories (students, senior citizens etc.)</p>
        </div>
      </div>
      <div className="px-4 py-3 cursor-not-allowed ">
        <div className="  shadow-lg p-4">
          <h1 className="text-lg font-medium text-gray-400"> Welcome Offer ₹59</h1>
          <p className="text-sm text-gray-300">Special offer for the first-time users. Get 10 trips at less than ₹6 per trip</p>
          <div className="bg-gray-200 p-3 my-2 flex items-center">
          <div className="rounded-full bg-yellow-400 p-1 flex justify-center items-center h-4  w-4  mx-4">
          <i className="fa-solid fa-exclamation text-xs"></i>
          </div>
                <h1 className="text-sm">Currently not available for purchase</h1>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 cursor-not-allowed ">
        <div className="  shadow-lg p-4">
          <h1 className="text-lg font-medium text-gray-400">Super Saver Plan</h1>
          <p className="text-sm text-gray-300">Cheapest way to travel</p>
          <div className="bg-gray-200 p-3 my-2 flex items-center">
          <div className="rounded-full bg-yellow-400 p-1 flex justify-center items-center h-4  w-4  mx-4">
          <i className="fa-solid fa-exclamation text-xs"></i>
          </div>
                <h1 className="text-sm">Currently not available for purchase</h1>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default BusPass;
