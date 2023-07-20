import React from "react";
// import { NavLink } from "react-router-dom";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-slate-100 h-[80vh]">
      <div className=" flex justify-center h-screen">
        <form action="/" method="post">
          <div class="flex flex-col mb-4 pt-10">
            <label for="email" class="text-2xl font-medium text-gray-700 mb-5 ">
              What's your phone number or <br /> email?
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email or phone number"
              class="w-full px-3 py-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="w-full px-8 py-3 text-white bg-slate-800 rounded-md focus:outline-none hover:bg-gray-700 transition-all duration-200"
            >
              Continue
            </button>
          </div>

          <div class="flex items-center py-4">
            <div class="flex-grow border-1  h-px bg-gray-700"></div>
            <span class="flex-shrink text-xl text-gray-500 px-3 font-normal">
              or
            </span>
            <div class="flex-grow h-px border-1 bg-gray-700"></div>
          </div>

          <div class="flex items-center justify-center mt-4 mb-2">
            <a href="/register" class="text-sm text-gray-700">
              Don't have an account?
            </a>
          </div>

          <div class=" mt-2">
            <button
              type="submit"
              className="w-full px-8 py-3 text-white bg-slate-800 rounded-md flex justify-center focus:outline-none hover:bg-gray-700 transition-all duration-200"
            >
              <span className="mt-1 mr-2">
                <FaGoogle />
              </span>
              Login with Google
            </button>
          </div>
          <div class=" mt-2">
            <button
              type="submit"
              class="w-full px-8 py-3 text-white bg-slate-800 rounded-md  flex justify-center focus:outline-none hover:bg-gray-700 transition-all duration-200"
            >
              <span className="mt-1 mr-2">
                <FaApple />
              </span>
              Login with Apple ID
            </button>
          </div>
          <div class=" mt-2">
            <button
              type="submit"
              class="w-full px-8 py-3 text-white bg-slate-800 rounded-md flex justify-center focus:outline-none hover:bg-gray-700 transition-all duration-200"
            >
              <span className="mt-1 mr-2">
                <FaFacebook />
              </span>
              Login with facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
