import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Cities = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
      <div className="px-10 pt-10">
        <h2 className="text-center font-medium text-xl mb-5">
          22 Cities and Counting
        </h2>
        <h1 className="text-4xl font-bold text-center mb-5">Chalo Cities</h1>
        <div className="lg:px-56">
          <p className="text-center px-5 mb-5">
            Redefining the bus travel experience through technology.
          </p>
        </div>
      </div>

      {/* city list */}

      <div className="xl:mx-auto xl:max-w-7xl max-w-full mx-auto">
        <div className="grid grid-rows-4">
          <div className="">
            <div className="grid grid-cols-6 px-10 py-2 gap-4 max-md:grid-cols-4 max-sm:grid-cols-3  ">
              <div className="">
                <img
                  src="https://chalo.com/assets/images/mumbai-2.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Mumbai</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/bhopal.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Bhopal</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/chennai.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Chennai</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/jabalpur.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Jabalpur</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/jabalpur.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">
                  Bhubneshwar
                </h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/indore.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Indore</h1>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-6 px-10 py-2 gap-4 max-md:grid-cols-4 max-sm:grid-cols-3 ">
              <div className="">
                <img
                  src="https://chalo.com/assets/images/mumbai-2.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">
                  Metro Manilla
                </h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/bhopal.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Bangkok</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/chennai.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Kochi</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/jabalpur.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Lucknow</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/jabalpur.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Nagpur</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/indore.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Indore</h1>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-6 px-10 py-2 gap-4 max-md:grid-cols-4 max-sm:grid-cols-3">
              <div className="">
                <img
                  src="https://chalo.com/assets/images/mumbai-2.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Mumbai</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/bhopal.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Bhopal</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/chennai.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Chennai</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/jabalpur.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Jabalpur</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/jabalpur.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">
                  Bhubneshwar
                </h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/indore.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Indore</h1>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-6 px-10 py-2 gap-4 max-md:grid-cols-4 max-sm:grid-cols-3">
              <div className="">
                <img
                  src="https://chalo.com/assets/images/mumbai-2.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Mumbai</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/bhopal.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Bhopal</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/chennai.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Chennai</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/jabalpur.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Jabalpur</h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/jabalpur.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">
                  Bhubneshwar
                </h1>
              </div>
              <div className="">
                <img
                  src="https://chalo.com/assets/images/indore.png"
                  alt=""
                  className="rounded-full h-fit"
                />
                <h1 className="text-center text-xl text-gray-600">Indore</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="text-center py-10">
     <NavLink to="/allcities" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
      <button className="inline-flex items-center border-2 text-black  px-8 py-2  focus:outline-none hover:bg-stone-900 hover:text-white rounded-full mt-4 md:mt-0">
        View All Cities
      </button>
      </NavLink>
     </div>
    </div>
  );
};

export default Cities;
