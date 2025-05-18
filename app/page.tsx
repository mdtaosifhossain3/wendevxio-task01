"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
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
      {/* Navigation */}
      <NavBar />

      {/* Hero Content */}
      <HeroSection />
      {/* Brand Section */}
      <BrandSection />

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
