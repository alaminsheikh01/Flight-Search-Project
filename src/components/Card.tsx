"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { destinations } from "../utils/helpers";
import { Destination } from "../types/flight";


const TrendingDestinations: React.FC = () => {
  return (
    <motion.div
      className="p-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-2xl font-bold mb-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Trending destinations
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Most popular choices for travellers from Bangladesh
      </motion.p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {destinations?.map((destination: Destination, index: number) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={destination?.image}
              alt={destination.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg font-bold px-3 py-1 rounded">
              {destination.name} {destination.flag}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrendingDestinations;
