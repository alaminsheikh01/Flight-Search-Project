// components/Banner.tsx
import React from "react";
import Navbar from "./Navbar";
import FlightSearchForm from "./FlightSearchForm";

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center w-full h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/banner.jpg')" }} // Ensure 'banner.jpg' exists in the public folder
    >
      <Navbar />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Best Escape Choice
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Experience the Best in Travel. A Journey Beyond Your Imagination,
          Where Every Destination Becomes an Unforgettable Adventure.
        </p>
      </div>
      <FlightSearchForm />
    </section>
  );
};

export default Banner;
