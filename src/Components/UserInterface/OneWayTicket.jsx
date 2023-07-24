import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OneWayTicket = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div >
      <div className="p-4  shadow-md mb-7 flex items-center ">
        <FaArrowLeft className=" ml-2 mr-4  text-xl" onClick={goBack} />
        <h1 className="text-xl font-bold">Select Trip</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Route Number"
          className="placeholder-black border-b-2 border-black py-4 mb-4 w-[95%] focus:outline-none hover:bg-gray-100 mx-5"
        />
        <input
          type="text"
          placeholder="Enter Start Stop"
          className="placeholder-black border-b-2 border-black py-4 mb-4 focus:outline-none w-[95%] hover:bg-gray-100 mx-5"
        />
        <input
          type="text"
          placeholder="Enter End Stop"
          className="placeholder-black border-b-2 border-black py-4 mb-4 focus:outline-none  w-[95%] hover:bg-gray-100 mx-5"
        />
      </div>
      <div className=" my-4">
        <button className="bg-gray-800  w-[95%] mx-5 p-2 text-white rounded-lg hover:bg-gray-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default OneWayTicket;
