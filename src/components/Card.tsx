"use client";
import React from "react";
import { destinations } from "../utils/helpers";

const TrendingDestinations = () => {
  return (
    <div className="p-12">
      <h2 className="text-2xl font-bold mb-2">Trending destinations</h2>
      <p className="text-gray-600 mb-6">
        Most popular choices for travellers from Bangladesh
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {destinations?.map((destination, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg font-bold px-3 py-1 rounded">
              {destination.name} {destination.flag}
            </div>
            {/* Add a dark overlay with fade-in effect */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestinations;
