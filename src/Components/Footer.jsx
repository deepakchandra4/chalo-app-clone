import React from "react";
import { FaFacebook, FaTwitter, FaInstagram , FaYoutube , FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-stone-900  grid max-lg:grid-cols-1 max-sm:grid-cols-1  grid-cols-3 gap-0 ">
      <div className=" text-white flex-col max-md:p-6 max-lg:p-7 p-20">
        <h1 className=" text-4xl font-medium pt-10 pb-4">Contact Us</h1>
        <span className=" font-medium">Our offices</span>
        <div className="pt-4 text-left">
          <p className="">
            F-611 Tower 2, Seawoods Grand Central, Navi Mumbai 400706 India{" "}
            <br />
            Corporate Identification Number (CIN): U72900MH2014PTC254181
          </p>

          <p className="pt-4 pb-6">
            100 Peck Seah street, #08-14 PS100, Singapore 079333 <br />
            Unique Entity Number (UEN): 201438158H
          </p>
        </div>
        <span className="">Email: contact@chalo.com</span>
      </div>
      <div className="bg-stone-900 text-white flex-col max-md:p-7 max-lg:p-7 p-20 ">
        <h1 className=" text-4xl font-medium pt-10 pb-4">Social Connect</h1>
        <ul>
        <li className="flex justify-start items-center space-x-4 py-2 ">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <FaLinkedin size={30} className="hover:text-gray-400" />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} className="hover:text-gray-400" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} className="hover:text-gray-400" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={30} className="hover:text-gray-400" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} className="hover:text-gray-400" />
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-stone-900 text-white flex-col max-md:p-7 max-lg:p-7 p-32">
        <h1 className="text-white text-xl underline pb-3">Terms and Conditions</h1>
        <p>Copyright © Chalo Mobility Private Limited. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
