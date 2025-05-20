import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";

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
      <nav className="max-w-[1640px] mx-auto lg:flex lg:px-6 3xl:px-0  justify-between pt-7   hidden  items-center  ">
        <Image alt="logo" src={"/logo.png"} width={221} height={32} />

        <ul className="flex flex-col md:flex-row  text-[18px] font-medium  gap-18">
          {["Home", "Service", "Work", "About"].map((item) =>
            item == "Home" ? (
              <>
                <li
                  className="abc_home"
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </li>
              </>
            ) : (
              <>
                <li
                  className="abc"
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </li>
              </>
            )
          )}
        </ul>

        <Button />
      </nav>
      {/* Mobile Menu Button */}
      <div className=" flex justify-between items-center p-4 lg:hidden">
        <Image alt="logo" src={"/logo.png"} width={221} height={32} />
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl p-2 cursor-pointer"
        >
          {isMenuOpen ? (
            <Image src={"/cross.png"} alt="menu" width={38} height={38} />
          ) : (
            <Image src={"/menu.png"} alt="menu" width={38} height={38} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
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
