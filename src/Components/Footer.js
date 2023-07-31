import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

export const Footer = () => {
  const links_list = [
    { name: "About" },
    { name: "Contact" },
    { name: "Tack order" },
    { name: "Help" },
  ];

  const category_list = [
    { name: "Bedroom" },
    { name: "Decor" },
    { name: "Living Room" },
    { name: "Office" },
  ];
  const social_list = [
    { icon: <FaFacebookF /> },
    { icon: <FaInstagram /> },
    { icon: <FaTwitter /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaPinterestP /> },
  ];
  return (
    <div className="w-full h-[30rem] max-sm:h-[40rem] bg-gray-200 border-t border-gray-300">
      <div className="w-11/12 h-5/6 mx-auto py-10 flex max-sm:flex-col">
        <div className="basis-1/2">
          <h1 className="text-2xl font-bold flex flex-col cursor-pointer w-fit">
            M.A AND <span className="text-sm font-normal">SONS RUGS</span>
          </h1>
        </div>

        <div className="basis-1/2 grid grid-cols-3 max-lg:grid-cols-2 max-sm:gap-10">
          <div className="flex flex-col gap-10">
            <h4>Links</h4>
            <ul className="flex flex-col gap-1 text-[#db6e14]">
              {links_list.map((i) => (
                <li className="hover:text-black hover:duration-500 duration-700 cursor-pointer ">
                  {i.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-10">
            <h4>Category</h4>
            <ul className="flex flex-col gap-1 text-[#db6e14]">
              {category_list.map((i) => (
                <li className="hover:text-black hover:duration-500 duration-700 cursor-pointer">
                  {i.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col max-lg:col-span-2 gap-10">
            <h4 className="max-lg:hidden">Subscribe</h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address..."
                className="py-3 px-2 appearance-none "
              />
              <button type="submit" className="px-4 py-3 bg-black text-white">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Line above Copy right */}
      <div className="w-full h-[1px] bg-gray-300"></div>
      {/* Copy Right and Social Links */}
      <div className="w-11/12 h-1/6 mx-auto flex max-md:flex-col justify-between max-md:justify-around items-center">
        <p className="text-gray-700 max-sm:text-xs">
          Copyright 2023 M.A And Sons Rugs | Powered by Mohd Samir
        </p>
        <ul className="flex gap-4 text-black text-lg">
          {social_list.map((i) => (
            <li className="cursor-pointer">{i.icon}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
