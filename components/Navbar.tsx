"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/infrastructure", label: "Infrastructure & Setup" },
  { href: "/culinary", label: "Culinary & Operations" },
  { href: "/talent", label: "Talent & Training" },
  { href: "/digital", label: "Digital & Growth" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);
  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:flex justify-between items-center px-4 lg:px-8 py-2 bg-gray-900 text-white text-xs sm:text-sm">
        <a href="tel:9167636653" className="hover:underline">
          📞 9167636653
        </a>
        <a href="mailto:info@kitchenpulse.in" className="hover:underline">
          📧 info@kitchenpulse.in
        </a>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              Kitchen<span className="text-orange-600">Pulse</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 text-gray-700 font-medium text-sm lg:text-base">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-orange-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-orange-600 transition-colors"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services <ChevronDown size={16} aria-hidden="true" />
              </button>

              <div className="absolute left-0 mt-3 w-52 lg:w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {SERVICE_LINKS.map((service, index) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-4 py-2.5 hover:bg-gray-100 text-sm ${
                      index === 0
                        ? "rounded-t-lg"
                        : index === SERVICE_LINKS.length - 1
                        ? "rounded-b-lg"
                        : ""
                    }`}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {NAV_LINKS.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-orange-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-2 lg:ml-4 bg-orange-600 text-white px-4 lg:px-5 py-2 rounded-lg shadow hover:bg-orange-700 transition-colors text-sm lg:text-base"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-1.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
       {isOpen && (
  <div className="md:hidden border-t border-gray-200">
    <div className="px-4 sm:px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium text-sm sm:text-base">
      <Link href="/" onClick={closeMobileMenu}>
        Home
      </Link>
      <Link href="/about" onClick={closeMobileMenu}>
        About
      </Link>

      {/* Services accordion */}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setIsServicesOpen((prev) => !prev)}
          className="flex items-center justify-between w-full"
        >
          <span>Services</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              isServicesOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isServicesOpen && (
          <div className="pl-3 flex flex-col gap-2 text-xs sm:text-sm">
            <Link href="/infrastructure" onClick={closeMobileMenu}>
              Infrastructure & Setup
            </Link>
            <Link href="/culinary" onClick={closeMobileMenu}>
              Culinary & Operations
            </Link>
            <Link href="/talent" onClick={closeMobileMenu}>
              Talent & Training
            </Link>
            <Link href="/digital" onClick={closeMobileMenu}>
              Digital & Growth
            </Link>
          </div>
        )}
      </div>

      <Link href="/process" onClick={closeMobileMenu}>
        Process
      </Link>
      <Link href="/contact" onClick={closeMobileMenu}>
        Contact
      </Link>

      <Link
        href="/contact"
        onClick={closeMobileMenu}
        className="mt-2 block bg-orange-600 text-white text-center px-5 py-3 rounded-lg shadow hover:bg-orange-700 transition-colors"
      >
        Book a Consultation
      </Link>
    </div>
  </div>
)}

      </nav>
    </>
  );
}
