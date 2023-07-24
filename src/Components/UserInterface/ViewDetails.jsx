import React, { useEffect, useState } from "react";
import {
  FaTicketAlt,
  FaIdCard,
  FaTrain,
  FaBus,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ViewDetails = () => {
  useEffect(() => {
    setOpen(false);
  }, []);

  const [open, setOpen] = useState(true);

  return (
    <div>
      <div className=" bg-gray-300 ">
        <div className="">
          <div className="bg-gray-700 absolute  pt-2 pb-8  w-full rounded-b-3xl">
            <div
              className="absolute bg-white rounded-full p-3 top-2 left-4 cursor-pointer "
              onClick={() => setOpen(!open)}
            >
              <div className="">
                <FaUserAlt className="text-black text-lg bg-white" />
                <div className={`${open ? "w-72 " : "hidden"}`}>
                  <div
                    className={`z-20 fixed top-0 lg:left-0 h-[99vh] w-9/12 lg:w-80 bg-gray-100 shadow-2xl`}
                  >
                    <div className="flex bg-white p-4">
                      <div className="bg-gray-700 text-white p-4 max-md:p-[-0.25] rounded-full">
                        <FaUserAlt />
                      </div>
                      <div className="ms-2 text-3xl ">
                        <h1 className="text-md">Sign In/ Register</h1>
                        <p className="text-sm">To See you ticket pass</p>
                      </div>
                    </div>
                    <ul className="text-xl space-y-5 font-normal mt-6 ps-10 pb-6 bg-white">
                      <li className="hover:bg-gray-100 pt-2 ">
                        Your Ticket and Passes
                      </li>
                      <li className="hover:bg-gray-100 pt-2">Change City</li>
                      <li className="hover:bg-gray-100 pt-2">Support</li>
                      <li className="hover:bg-gray-100 pt-2 ">
                        Change Language
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="text-center font-bold text-3xl  text-white">
                Chalo
              </h1>
            </div>
            <div className="px-10 absolute mt-2 w-full ">
              <input
                type="search"
                className="rounded-3xl w-full p-3 shadow-md shadow-current focus:outline-none "
                placeholder="Enter destination or bus number"
              />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="pt-20 bg-white">
          <div className=" p-10 ">
            <div className="bg-slate-300 p-12 hover:shadow-current h-20 w-80 shadow-md rounded-sm">
              <h1 className="">al</h1>
            </div>
          </div>
        </div>

        {/* third card */}
        <div className="pt-3">
          <div className="bg-white p-6 ">
            <div className="flex justify-between">
              <h1 className="text-black   text-2xl font-bold  pb-4">
                Buy bus ticket / pass
              </h1>
              <span className="order-last text-white underline text-sm font-medium">
                {" "}
                See All
              </span>
            </div>

            <div className="lg:flex  lg:gap-10  w-fit">
              <NavLink to="select-trip">
                <div className="bg-slate-100 h-12 w-96 max-md:w-72 shadow-md  rounded-sm hover:shadow-current">
                  <h1 className="p-2 flex">
                    <FaTicketAlt className="pr-2 text-3xl  " /> One Way Ticket
                  </h1>
                </div>
              </NavLink>
              <NavLink to="select-product-type">
                <div className="bg-slate-100 h-12 w-96 max-md:w-72  shadow-md rounded-sm hover:shadow-current">
                  <h1 className=" p-2 flex ">
                    <FaIdCard className="pr-2 text-3xl" />
                    Bus Pass
                  </h1>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Fourth Card */}

        <div className="pt-3">
          <div className="bg-white p-6 ">
            <div className="flex justify-between">
              <h1 className="text-black  text-2xl font-bold  pb-4">
                Nearest Bus Stop
              </h1>
              <span className="order-last text-white underline text-sm font-medium">
                {" "}
                See All
              </span>
            </div>
            <div className="flex gap-10">
              <div className="bg-white h-fit w-full shadow-md rounded-sm  shadow-current">
                <div className="flex justify-between">
                  <h1 className="pt-2 flex text-xs font-medium">
                    <FaTrain className="pr-2 text-xl ps-1" />
                    Shri Krishna Talkies or Krishna pura
                  </h1>
                  <span className="order-last pr-4 text-xs pt-2  font-medium">
                    <i className="fas fa-walking  pr-2  "></i>2 mins
                  </span>
                </div>
                <p className="text-xs p-0 text-gray-700">Next Buses</p>
                <div className="flex pt-10 pb-2">
                  <div className="flex items-center text-2xl px-7 text-center">
                    <FaBus />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">M 22 A</h1>
                    <p className="text-md">To Lakhani </p>
                  </div>
                </div>
                <hr className="my-2 h-px border-0 bg-gray-300" />
                <div className="flex pt-2 ">
                  <div className="flex items-center text-2xl px-7 text-center">
                    <FaBus />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">M 22 A</h1>
                    <p className="text-md">To Lakhani </p>
                  </div>
                </div>
                <hr className="my-2 h-px border-0 bg-gray-300" />

                <div className="flex justify-center cursor-pointer p-2 items-center hover:bg-gray-100">
                  <h1 className="text-orange-500 font-bold text-md">
                    See All Buses
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth card  */}

        <div className="pt-3">
          <div className="bg-white p-6 ">
            <div className="flex justify-between">
              <h1 className="text-black  text-2xl font-bold  pb-4">
                Buses around you
              </h1>
            </div>
            <div className="flex gap-10">
              <div className="bg-yellow h-fit w-full shadow-md rounded-sm  shadow-current">
                <div className="gap-1">
                  <div className="flex justify-center p-28">
                    <h1>Map Here</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
