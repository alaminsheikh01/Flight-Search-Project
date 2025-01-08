"use client";
import React from "react";
import FlightSearchForm from "./FlightSearchForm";

const Banner = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center px-4 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Best Escape Choice
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Experience the Best in Travel. A Journey Beyond Your Imagination,
        </p>
      </div>

      {/* Search Form */}
      <FlightSearchForm />
    </section>
  );
};

export default Banner;
