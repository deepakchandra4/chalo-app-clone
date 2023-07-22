import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const SideUserNav = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`bg-yellow-100 flex `}>
      <div
        className={`${
          open ? "w-72" : "w-0"
        } bg-dark-purple duration-300 h-screen relative`}
      >
        <div
          className={`p-7 text-2xl font-semibold flex-1 h-screen bg-yellow-900`}
        >
          <h1 onClick={() => setOpen(!open)} className={`absolute text-white cursor-pointer`}>
            click
          </h1>
          <div className={`${open ? "w-72" : "hidden"}`}>
            <div className="flex">
              <div className="bg-gray-900 text-white p-4 rounded-full">
                <FaUser />
              </div>
              <div className="ms-2">
              <h1 className="text-md">Sign In/ Register</h1>
              <p className="text-sm">To See you ticket pass</p>
              </div>
            </div>
            <ul className="text-xl space-y-4 font-normal mt-6 ">
              <li className="hover:bg-gray-100">Your Ticket and Passes</li>
              <li className="hover:bg-gray-100">Change City</li>
              <li className="hover:bg-gray-100">Support</li>
              <li className="hover:bg-gray-100">Change Language</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SideUserNav;
