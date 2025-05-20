"use client";
import FAQPage from "@/components/faq";
import Footer from "@/components/footer";
import TestimonialsSection from "@/components/testimonia";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import BrandSection from "@/components/BrandSection";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div className=" bg-[#EEF3FF]   text-black   ">
      <div className="hero">
        {/* Navigation */}
        <NavBar />

        {/* Hero Content */}
        <HeroSection />
        {/* Brand Section */}
        <BrandSection />
      </div>

      {/* About us */}
      <About />

      {/* What We Do */}
      <WhatWeDo />

      {/* Faq */}
      <FAQPage />

      {/* Testimonial*/}
      <TestimonialsSection />

      {/* Footer*/}
      <Footer />
    </div>
  );
}
