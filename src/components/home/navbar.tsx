"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
// import { Logo } from "@/public/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation links with their corresponding section IDs
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "How It Works", id: "howitworks" },
  ];

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  // Update active section and navbar background based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY;

      // Check if page is scrolled past the header
      setIsScrolled(scrollPosition > window.innerHeight - 80); // 80px is approx navbar height

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionTop + sectionHeight - 100
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="flex items-center space-x-2"
        >
          <img
            src="/assets/images/Group 11.png"
            alt="Fixeroni Logo"
            width={20}
            height={20}
          />
          <span
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-antipasto)" }}
          >
            Fixeroni
          </span>
        </a>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`text-gray-700 text-[12px] hover:text-green-600 font-medium relative pb-1 ${
                  activeSection === link.id ? "text-green-600" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transform origin-left transition-transform duration-300 ${
                    activeSection === link.id ? "scale-x-100" : "scale-x-0"
                  } hover:scale-x-100`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/artisan/auth/login">
            <Button className="bg-[#10B981] hover:bg-green-600 text-white text-[12px] px-6 py-2 rounded-full cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div
          className={`md:hidden ${
            isScrolled ? "bg-gray-50" : "bg-white"
          } border-t`}
        >
          <ul className="flex flex-col space-y-3 p-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`block text-gray-700 hover:text-green-600 font-medium py-2 relative ${
                    activeSection === link.id ? "text-green-600" : ""
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transform origin-left transition-transform duration-300 ${
                      activeSection === link.id ? "scale-x-100" : "scale-x-0"
                    } hover:scale-x-100`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <Link href="/login">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
