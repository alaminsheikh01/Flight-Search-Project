"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-4">
        <div className="text-2xl font-bold text-white">Flight Search</div>
        <div className="flex space-x-6">
          <Link href="/" legacyBehavior>
            <a className="text-white font-medium hover:text-orange-500 px-4 py-2">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-white font-medium hover:text-orange-500 px-4 py-2">About Us</a>
          </Link>
          <Link href="/service" legacyBehavior>
            <a className="text-white font-medium hover:text-orange-500 px-4 py-2">Service</a>
          </Link>
          <Link href="/result" legacyBehavior>
          <a className="text-white font-medium hover:text-orange-500 px-4 py-2">Result</a>
          </Link>
          <Link href="/signin" legacyBehavior>
            <a className="px-4 py-2 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600">
              Sign In
            </a>
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;
