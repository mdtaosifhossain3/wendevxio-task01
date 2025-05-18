import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="px-12 py-14 flex flex-col lg:flex-row  justify-center items-center gap-16 h-[50%]"
    >
      <Image alt="about" src={"/about.png"} width={500} height={500} />

      <div className="max-w-xl">
        <h2 className="font-bold pb-2 text-lg">__ About US</h2>
        <p className="text-5xl pb-8 font-semibold text-center sm:text-left">
          Who We Are & Why Choose Us
        </p>
        <p className="text-[22px] text-center sm:text-left">
          At UX Recharge, we specialize in creating modern, user-friendly
          websites tailored for SaaS companies. Our designs are
          conversion-focused, fast, and fully optimized for mobile and SEO.
        </p>
        <div className="flex justify-between flex-col space-y-5 sm:flex-row text-center pt-6 pb-4 ">
          <div>
            <p className=" text-5xl">10k+</p>
            <p>
              SaaS Projects <br /> Delivered
            </p>
          </div>
          <div>
            <p className=" text-5xl">10k+</p>
            <p>
              Happy Clients <br /> Worldwide
            </p>
          </div>
          <div>
            <p className=" text-5xl">10k+</p>
            <p> Industry Awards</p>
          </div>
        </div>
        <button className="block mx-auto sm:inline rounded-full bg-blue-600 text-white px-12 py-3 text-lg mt-4">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default About;
