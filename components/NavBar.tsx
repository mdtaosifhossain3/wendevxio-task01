import Image from "next/image";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <nav className="max-w-[1440px] mx-auto lg:flex lg:px-6 2xl:px-0  justify-between pt-[50px]  items-center hidden ">
        <Image alt="logo" src={"/logo.png"} width={221} height={32} />
        <ul className="flex flex-col md:flex-row gap-12 mt-4 md:mt-0  text-xl">
          {["Home", "Service", "Work", "About"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={` cursor-pointer flex flex-col md:flex-row gap-12 mt-4 md:mt-0  text-xl hover:text-blue-600 transition-colors `}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="cursor-pointer text-blue-600 font-bold text-[22px] flex space-x-2">
          <Image
            alt="contact_us_edit_button"
            src={"/contact_us_edit_button.png"}
            width={33}
            height={33}
          />
          <span>Contact Us</span>
        </div>
      </nav>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-2xl p-2 cursor-pointer"
      >
        {isMenuOpen ? (
          <div>
            <Image src={"/cross.png"} alt="menu" width={38} height={38} />
          </div>
        ) : (
          <Image src={"/menu.png"} alt="menu" width={38} height={38} />
        )}
      </button>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["Home", "Service", "Work", "About"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium hover:text-blue-600 transition-colors py-2 `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
