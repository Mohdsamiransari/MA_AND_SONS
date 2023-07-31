import React, { useEffect } from "react";
import Bg_image from "../Assets/bg_image.png";
import { Navbar } from "../Components/Navbar";
import { motion } from "framer-motion";
import { useMotionValue, useVelocity } from "framer-motion";
//'Oswald',sans-serif

export const Home = () => {
  const Tag = [
    { id: 1, name: "Lorem Ipsum" },
    { id: 2, name: "Lorem Ipsum" },
    { id: 3, name: "Lorem Ipsum" },
    { id: 4, name: "Lorem Ipsum" },
    { id: 5, name: "Lorem Ipsum" },
    { id: 6, name: "Lorem Ipsum" },
    { id: 7, name: "Lorem Ipsum" },
    { id: 8, name: "Lorem Ipsum" },
    { id: 9, name: "Lorem Ipsum" },
    { id: 10, name: "Lorem Ipsum" },
  ];

  const Shop_Category = [
    {
      id: 1,
      name: "BEDROOM",
      image_url:
        "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
    {
      id: 2,
      name: "LIVING ROOM",
      image_url:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      name: "OFFICE",
      image_url:
        "https://images.unsplash.com/photo-1604328727766-a151d1045ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      name: "STUDIO",
      image_url:
        "https://images.unsplash.com/photo-1642437317106-5716114cfede?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    },
  ];

  return (
    <main className="relative">
      <div className="fixed -z-10 bg-gradient-to-br from-[#86d1b9] to-[#FFFFFF] w-full h-screen grid place-items-center">
        <img
          src={Bg_image}
          className="absolute right-0  w-[40%] "
          alt="Bg_Image"
        />
      </div>
      {/* <Navbar /> */}
      <div className="relative w-full  bg-transparent ">
        <div className="relative w-full h-screen bg-transparent px-16 flex flex-col items-start justify-center  font-semibold ">
          <p className="">Black Friday in July</p>
          <h1 className="text-6xl font-bold">Up to 50% off</h1>
          <h3 className="text-lg mt-4">Hundreds of styles available</h3>
          <button className="mt-6 px-4 py-3 bg-black text-white ">
            SHOP NOW
          </button>
        </div>
        <div className=" bg-white px-6 pb-[10rem]">
          <div className="flex overflow-hidden flex-wrap">
            <motion.div className=" h-48 flex items-center gap-6">
              {Tag.map((i) => (
                <div
                  className="border border-gray-300 w-[15rem] h-3/4 grid place-items-center"
                  key={i.id}
                >
                  {i.name}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Shop by category */}
          <div className="w-full  mt-16 ">
            <h1 className="text-center text-2xl sm:text-5xl font-bold ">
              Shop by category
            </h1>
            <div className="w-16 h-[1px] mx-auto bg-orange-600 mt-8"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-11/12  gap-4 justify-center mx-auto mt-6 ">
              {Shop_Category.map((i) => (
                <div className="bg-gray-200  h-[44vw] md:h-[34vw] lg:h-[28vw]    flex flex-col p-4 gap-2">
                  <div
                    className="basis-4/5 bg-cover"
                    style={{ backgroundImage: `url(${i.image_url})` }}
                  ></div>
                  <div className=" basis-1/5 bg-white grid place-items-center text-xs sm:text-lg">
                    {i.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured product */}
          <div className="w-full mt-32">
            <h1 className="text-center text-5xl font-bold">Featured Product</h1>
            <div className="w-16 h-[1px] mx-auto bg-orange-600 mt-8"></div>
            <div className="grid grid-cols-3 grid-rows-2 gap-6 mt-6">
              <div className="bg-gray-200  h-[34rem]">1</div>
              <div className="bg-gray-200  h-[34rem]">2</div>
              <div className="bg-gray-200  h-[34rem]">3</div>
              <div className="bg-gray-200  h-[34rem]">4</div>
              <div className="bg-gray-200  h-[34rem]">5</div>
              <div className="bg-gray-200  h-[34rem]">6</div>
            </div>
          </div>

          {/* Highlighted  */}
          <div className="flex gap-5 items-center w-full mt-6">
            <div className="basis-3/5 h-[34rem] bg-gray-200">1</div>
            <div className="w-2/5 h-[34rem] bg-gray-200 ">2</div>
          </div>

          {/* Rating and Review */}
          <div className="w-full flex gap-6 mt-6">
            <div className="bg-gray-200 w-full h-[18rem]">1</div>
            <div className="bg-gray-200 w-full h-[18rem]">2</div>
            <div className="bg-gray-200 w-full h-[18rem]">3</div>
          </div>

          {/* Why choose us */}
          <div className="mt-32 ">
            <h1 className="text-center text-2xl sm:text-5xl font-bold">
              Why choose us
            </h1>
            <div className="w-16 h-[1px] mx-auto bg-orange-600 mt-8"></div>
            <div className="w-full sm:flex  gap-6 mt-6 px-14 ">
              <div className="bg-gray-200 w-full h-[14rem] ">1</div>
              <div className="bg-gray-200 w-full h-[14rem] mt-4 sm:mt-0">2</div>
              <div className="bg-gray-200 w-full h-[14rem] mt-4 sm:mt-0">3</div>
              <div className="bg-gray-200 w-full h-[14rem] mt-4 sm:mt-0">4</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
