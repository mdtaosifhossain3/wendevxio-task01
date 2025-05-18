import React from "react";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="pt-20">
      <div className="text-center">
        <p className=" text-5xl font-bold">What We Do</p>
        <p className=" text-[22] pt-2">
          We design and develop stunning, high-performing websites for <br />{" "}
          SaaS products to maximize conversions.
        </p>
      </div>
      <div className="px-4 py-10 max-w-7xl mx-auto flex flex-col gap-6">
        {/* First Row - Left Aligned */}
        <div className="flex flex-wrap gap-6">
          <div className="w-full lg:w-[34%] bg-white shadow-xl rounded-2xl p-6 relative overflow-hidden hover:shadow-2xl transition">
            <Image alt="" src={"/icon1.png"} width={47} height={47} />
            <h3 className="font-semibold text-lg mb-2 pt-8">Website Design</h3>
            <p className="text-gray-600 text-sm">
              Our web developers are experts in building highly interactive and
              deeply pleasant full-screen websites that work as flawlessly on
              smartphones as they do on desktops or any other device of your
              users’ choice..
            </p>
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200 rounded-full blur-2xl opacity-30 -z-10" />
          </div>

          <div className="w-full lg:w-[34%] bg-white shadow-xl rounded-2xl p-6 relative overflow-hidden hover:shadow-2xl transition">
            <Image alt="" src={"/icon1.png"} width={47} height={47} />
            <h3 className="font-semibold text-lg mb-2 pt-8">
              SaaS Website Design
            </h3>
            <p className="text-gray-600 text-sm">
              Fully functional, high-performance SaaS websites built with modern
              technologies.
            </p>
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-300 rounded-full blur-2xl opacity-30 -z-10" />
          </div>
        </div>

        {/* Second Row - Right Aligned */}
        <div className="flex flex-wrap justify-end gap-6">
          <div className="w-full lg:w-[34%] bg-white shadow-xl rounded-2xl p-6 relative overflow-hidden hover:shadow-2xl transition">
            <Image alt="" src={"/icon1.png"} width={47} height={47} />
            <h3 className="font-semibold text-lg mb-2 pt-8">
              Website Development & Maintenance
            </h3>
            <p className="text-gray-600 text-sm">
              Our web developers are experts in building highly interactive and
              deeply pleasant full-screen websites that work as flawlessly on
              smartphones as they do on desktops or any other device of your
              users’ choice.
            </p>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-200 rounded-full blur-2xl opacity-30 -z-10" />
          </div>

          <div className="w-full lg:w-[34%] bg-white shadow-xl rounded-2xl p-6 relative overflow-hidden hover:shadow-2xl transition">
            <Image alt="" src={"/icon1.png"} width={47} height={47} />
            <h3 className="font-semibold text-lg mb-2 pt-8">
              WordPress Website Design
            </h3>
            <p className="text-gray-600 text-sm">
              Our web developers are experts in building highly interactive and
              deeply pleasant full-screen websites that work as flawlessly on
              smartphones as they do on desktops or any other device of your
              users’ choice.
            </p>
            <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-300 rounded-full blur-2xl opacity-30 -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
