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

      <div className="relative z-10 text-center px-4 text-white hidden sm:block">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Best Escape Choice
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-md md:max-w-2xl mx-auto leading-relaxed">
          Experience the Best in Travel. A Journey Beyond Your Imagination.
        </p>
      </div>

      {/* Search Form */}
      <div className="relative z-10 w-full px-4">
        <FlightSearchForm />
      </div>
    </section>
  );
};

export default Banner;
