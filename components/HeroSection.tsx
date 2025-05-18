import React from "react";

const HeroSection = () => {
  return (
    <div className=" max-w-[1440px] mx-auto min-h-[650] flex flex-col justify-center items-center">
      <p className="text-[#274AFF] font-bold text-3xl md:text-5xl leading-snug pb-6 max-w-[840px] text-center">
        Pixel-Perfect UI/UX Design for a <br className="hidden md:block" />{" "}
        Seamless User Experience
      </p>

      <p className="text-base md:text-lg text-gray-700 max-w-[840px] text-center">
        We design and develop stunning, high-performing websites for{" "}
        <br className="hidden md:block" /> SaaS products to maximize
        conversions.
      </p>

      <button className=" text-[22px] rounded-full bg-blue-600 text-white px-8 py-2 mt-6 hover:bg-blue-700 transition">
        Book A Call
      </button>
    </div>
  );
};

export default HeroSection;

// flex-grow w-full  max-w-7xl mx-auto text-center px-4 py-20 flex flex-col items-center justify-center
