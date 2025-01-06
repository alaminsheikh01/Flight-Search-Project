"use client";
import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.jpg')" }} // Ensure 'not-found-bg.jpg' exists in the public folder
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" legacyBehavior>
          <a className="px-6 py-3 bg-orange-500 text-white rounded-md text-lg font-medium hover:bg-orange-600">
            Go Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
