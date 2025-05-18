"use client"
import Image from 'next/image'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react';
import FAQPage from '@/components/faq';
import Footer from '@/components/footer';
import TestimonialsSection from '@/components/testimonia';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showcaseItems = [
    {
      id: 1,
      title: "Digital Marketing Website",
      subtitle: "We Have Best Solution To Grow Up Your Business",
      tags: ["UI/UX Design", "Web Design", "Wireframe"],
      image: "/design.png",
      largePreview: true
    },
    {
      id: 2,
      title: "Coffee Shop Landing",
      subtitle: "Brewing happiness, one cup at a time",
      tags: ["Branding", "Web Design"],
      image: "/design.png",
      darkTheme: true
    },
    {
      id: 3,
      title: "Creative Portfolio",
      subtitle: "Showcasing design excellence",
      tags: ["Portfolio", "Minimal"],
      image: "/design.png"
    },
    {
      id: 4,
      title: "Garment Tech Blog",
      subtitle: "Modern articles about fashion technology",
      tags: ["Blog", "E-commerce"],
      image: "/design.png",
      darkTheme: true
    }
  ];

  const categories = [
    "All Projects",
    "Web Design",
    "UI/UX Design",
    "Branding",
    "Mobile Apps",
    "E-commerce"
  ];

  const services = [
    {
      icon: "💼",
      title: "Grow your business",
      description: "We help businesses scale through effective digital marketing strategies and web solutions."
    },
    {
      icon: "🎨",
      title: "Create brand assets",
      description: "Our design team crafts memorable visual identities that resonate with your target audience."
    },
    {
      icon: "📊",
      title: "Insights & reports",
      description: "Get detailed analytics and performance reports to track your growth and optimize strategies."
    }
  ];

  return (
    <div className=" bg-[#EEF3FF]   text-black   ">
<div className="flex flex-col justify-between md:h-[940]">

{/* Navigation */}
<nav className="flex flex-col  md:flex-row justify-between md:px-12  px-4 py-6  text-lg">
  <h1 className="text-[#274AFF] font-bold text-2xl">WebDevXio</h1>
  <ul className="flex flex-col md:flex-row gap-12 mt-4 md:mt-0 text-base">
    <li className="cursor-pointer">Home</li>
    <li className="cursor-pointer">Service</li>
    <li className="cursor-pointer">Work</li>
    <li className="cursor-pointer">About Us</li>
  </ul>
  <div className="mt-4 md:mt-0 cursor-pointer text-blue-600 font-medium">Contact Us</div>
</nav>

{/* Hero Content */}
<div className="flex-grow w-full  max-w-7xl mx-auto text-center px-4 py-20 flex flex-col items-center justify-center  ">
  <p className="text-[#274AFF] font-bold text-3xl md:text-5xl leading-snug pb-6">
    Pixel-Perfect UI/UX Design for a <br className="hidden md:block" /> Seamless User Experience
  </p>

  <p className="text-base md:text-lg text-gray-700">
    We design and develop stunning, high-performing websites for <br className="hidden md:block" /> SaaS products to maximize conversions.
  </p>

  <button className="rounded-full bg-blue-600 text-white px-6 py-2 mt-6 hover:bg-blue-700 transition">
    Book Now
  </button>
</div>

{/* Brand Section */}
<div className=" mt-10">
  <p className="text-center text-2xl md:text-4xl font-semibold pb-6">
    Already <span className="text-[#274AFF]">Chosen</span> by the leaders
  </p>
  <div className="bg-[#E0E6FF] text-black flex flex-wrap justify-evenly gap-8 py-7 text-lg">
    <img alt='' src={"/slack.png"} />
    <img alt='' src={"/leadhuntio.png"}  />
    <img alt='' src={"/heap.png"}  />
    <img alt='' src={"/anytime_fitness.png"} />
  
  </div>
</div>

</div>


{/* Section two */}

<div className='px-12 py-14 flex flex-col lg:flex-row  justify-center items-center gap-16 h-[50%]'>
  <Image alt='about' src={"/about.png"} width={500} height={500} />
  
  <div className='max-w-xl'>
    <h2 className='font-bold pb-2 text-lg'>__ About US</h2>
    <p className='text-5xl pb-8 font-semibold'>Who We Are & Why Choose Us</p>
    <p className='text-[22px]'>
      At UX Recharge, we specialize in creating modern, user-friendly websites tailored for SaaS companies. Our designs are conversion-focused, fast, and fully optimized for mobile and SEO.
    </p>
    <div className='flex justify-between text-center pt-6 pb-4'>
      <div>
        <p className=' text-5xl'>10k+</p>
        <p >SaaS Projects <br/> Delivered</p>
      </div>
      <div>
        <p className=' text-5xl'>10k+</p>
        <p>Happy Clients <br/> Worldwide</p>
      </div>
      <div>
        <p className=' text-5xl'>10k+</p>
        <p> Industry Awards</p>
      </div>
    </div>
    <button className='rounded-full bg-blue-600 text-white px-12 py-3 text-lg mt-4'>
      Book Now
    </button>
  </div>
</div>
{/* Section three */}
<div className='pt-20'>
 <div className='text-center'>
 <p className=' text-5xl font-bold'>What We Do</p>
 <p className=' text-[22] pt-2'>We design and develop stunning, high-performing websites for <br/> SaaS products to maximize conversions.</p>
 </div>
<div className="px-4 py-10 max-w-7xl mx-auto flex flex-col gap-6">

  {/* First Row - Left Aligned */}
  <div className="flex flex-wrap gap-6">
    <div className="w-full lg:w-[34%] bg-white shadow-xl rounded-2xl p-6 relative overflow-hidden hover:shadow-2xl transition">
      <Image alt='' src={'/icon1.png'} width={47} height={47} />
      <h3 className="font-semibold text-lg mb-2 pt-8">Website Design</h3>
      <p className="text-gray-600 text-sm">Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice..</p>
      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200 rounded-full blur-2xl opacity-30 -z-10" />
    </div>

    <div className="w-full lg:w-[34%] bg-white shadow-xl rounded-2xl p-6 relative overflow-hidden hover:shadow-2xl transition">
    <Image alt='' src={'/icon1.png'} width={47} height={47} />
      <h3 className="font-semibold text-lg mb-2 pt-8">SaaS Website Design</h3>
      <p className="text-gray-600 text-sm">Fully functional, high-performance SaaS websites built with modern technologies.</p>
      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-300 rounded-full blur-2xl opacity-30 -z-10" />
    </div>
  </div>

  {/* Second Row - Right Aligned */}
  <div className="flex flex-wrap justify-end gap-6">
    <div className="w-full lg:w-[34%] bg-white shadow-xl rounded-2xl p-6 relative overflow-hidden hover:shadow-2xl transition">
    <Image alt='' src={'/icon1.png'} width={47} height={47} />
      <h3 className="font-semibold text-lg mb-2 pt-8">Website Development & Maintenance</h3>
      <p className="text-gray-600 text-sm">Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.</p>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-200 rounded-full blur-2xl opacity-30 -z-10" />
    </div>

    <div className="w-full lg:w-[34%] bg-white shadow-xl rounded-2xl p-6 relative overflow-hidden hover:shadow-2xl transition">
    <Image alt='' src={'/icon1.png'} width={47} height={47} />
      <h3 className="font-semibold text-lg mb-2 pt-8">WordPress Website Design</h3>
      <p className="text-gray-600 text-sm">Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.</p>
      <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-300 rounded-full blur-2xl opacity-30 -z-10" />
    </div>
  </div>

</div>

</div>
<FAQPage/>
<TestimonialsSection/>
<Footer />

    </div>
);
}
