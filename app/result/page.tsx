"use client";

import React from "react";
import Filter from "@/src/components/Filter";
import ResultHeader from "@/src/components/ResultHeader";
import FlightCard from "@/src/components/FlightCard";

const ResultPage = () => {
  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Header Section */}
      <ResultHeader />
      <div className="flex flex-1 overflow-hidden">
        {/* Filters Section */}
        <Filter />
        {/* Flights Section */}
        <FlightCard />
      </div>
    </div>
  );
};

export default ResultPage;
