import React from 'react'
import { motion } from 'framer-motion';
import Image1 from "../src/assets/dotImage1.webp";
import Image2 from "../src/assets/dotImage2.webp";
import Image3 from "../src/assets/dotImage3.webp";
import Image4 from "../src/assets/dotImage4.webp";
import Image5 from "../src/assets/dotImage5.webp";


function Home() {
  return (
    <div className=" w-full   flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-12 overflow-hidden">


      <div className="w-full lg:w-1/2 mb-10 lg:mb-0  lg:text-left">
        <p className="text-sm sm:text-base text-[#75BAFF] font-semibold relative inline-block after:content-[''] after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:w-[100px] md:after:w-[136px] after:h-[1px] after:bg-primary after:ml-4 md:after:ml-6 lg:after:ml-8">
          We are The Best
        </p>

        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-dark leading-tight">
          Graybook - Where AI meets every <span className="text-blue-600">profession.</span>
        </h1>

        <p className="mt-6 sm:mt-7 text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-[#8e8e8e] font-light leading-relaxed">
          A curated AI marketplace that now empowers you with all the tools and resources you need to transform your profession, accelerate performance, and deliver impactful value.
        </p>


        <button
          aria-label="Get Started"
          className="mt-8 sm:mt-10 bg-blue-500 hover:bg-primary text-white font-bold rounded-t-xl rounded-r-xl relative w-[180px] sm:w-[200px] md:w-[240px] h-[48px] sm:h-[54px] md:h-[60px] bg-pattern-btn"
        >
          <span className="absolute inset-0 bg-no-repeat bg-center bg-cover"></span>
          <span className="relative z-10 px-4 sm:px-5 text-base sm:text-lg md:text-xl">
            Get Started
          </span>
        </button>
      </div>





      {/* Right Section (Images) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=" hidden  lg:flex   w-full md:w-3/4 lg:w-1/2  justify-center gap-4 px-4 py-10 "
      >
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <img
            src={Image1}
            alt="VR user"
            className="w-44 h-[491px] object-cover rounded-full"
          />
          <img
            src={Image2}
            alt="Device"
            className="w-44 h-[240px] object-cover rounded-full"
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 pt-2">
          <img
            src={Image3}
            alt="AI Bot"
            className="w-44 h-[240px] object-cover rounded-full"
          />
          <img
            src={Image4}
            alt="Tree Art"
            className="w-44 h-[491px] object-cover rounded-full"
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 pt-30">
          <img
            src={Image5}
            alt="Tech Beam"
            className="w-44 h-[491px] object-cover rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Home