import React from "react";

const BrandSection = () => {
  return (
    <div className=" mt-10">
      <p className="text-center text-2xl md:text-4xl font-semibold pb-6">
        Already <span className="text-[#274AFF]">Chosen</span> by the leaders
      </p>
      <div className="bg-[#E0E6FF] text-black flex flex-wrap justify-evenly gap-8 py-7 text-lg">
        <img alt="" src={"/slack.png"} />
        <img alt="" src={"/leadhuntio.png"} />
        <img alt="" src={"/heap.png"} />
        <img alt="" src={"/anytime_fitness.png"} />
      </div>
    </div>
  );
};

export default BrandSection;
