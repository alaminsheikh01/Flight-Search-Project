"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-4 bg-black bg-opacity-50">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-white">
        <Link href="/" legacyBehavior>
          <a className="text-white font-medium hover:text-orange-500 px-4 py-2">
            Flight Search
          </a>
        </Link>
      </div>

      <button
        className="text-white text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Links Section */}
      <div
        className={`flex-col md:flex-row md:flex ${
          isOpen ? "flex" : "hidden"
        } absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-black md:bg-transparent md:space-x-6 text-center md:text-left`}
      >
        <Link href="/" legacyBehavior>
          <a
            className="text-white font-medium hover:text-orange-500 px-4 py-2 block md:inline-block"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a
            className="text-white font-medium hover:text-orange-500 px-4 py-2 block md:inline-block"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
        </Link>
        <Link href="/service" legacyBehavior>
          <a
            className="text-white font-medium hover:text-orange-500 px-4 py-2 block md:inline-block"
            onClick={() => setIsOpen(false)}
          >
            Service
          </a>
        </Link>
        <Link href="/result" legacyBehavior>
          <a
            className="text-white font-medium hover:text-orange-500 px-4 py-2 block md:inline-block"
            onClick={() => setIsOpen(false)}
          >
            Search Flight
          </a>
        </Link>
        <Link href="/signin" legacyBehavior>
          <a
            className="px-4 py-2 bg-orange-500 text-white rounded-md font-medium hover:bg-blue-500 hover:text-white block md:inline-block"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
