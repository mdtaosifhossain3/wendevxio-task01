import Image from "next/image";
import React from "react";

const BrandSection = () => {
  return (
    <div className=" mt-10">
      <p className="text-center text-2xl md:text-4xl font-semibold pb-6">
        Already <span className="text-[#274AFF]">Chosen</span> by the leaders
      </p>
      <div className="bg-[#E0E6FF] text-black flex flex-wrap justify-evenly gap-8 py-7 text-lg ">
        <Image alt="" src={"/slack.png"} width={129} height={52} />
        <Image alt="" src={"/leadhuntio.png"} width={196} height={36} />
        <Image alt="" src={"/heap.png"} width={109} height={36} />
        <Image alt="" src={"/anytime_fitness.png"} width={151} height={36} />
      </div>
    </div>
  );
};

export default BrandSection;
