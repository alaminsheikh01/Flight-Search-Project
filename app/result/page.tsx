"use client";

import React, { useEffect } from "react";
import Filter from "@/src/components/Filter";
import ResultHeader from "@/src/components/ResultHeader";
import FlightCard from "@/src/components/FlightCard";

const ResultPage = () => {
  useEffect(() => {
    document.title = "Flight Search";
  }, []);

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
