"use client";
import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  SwapOutlined,
  SearchOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import {
  Collapse,
  Radio,
  Slider,
  Button,
  Select,
  Card,
  DatePicker,
  AutoComplete,
} from "antd";
import { toast } from "react-toastify";
import { useFlightContext } from "@/src/context/FlightContext";
import { locations } from "@/src/components/helper";

const { Panel } = Collapse;
const { Option } = Select;

const ResultPage = () => {
  const { flights } = useFlightContext();
  console.log("Flights:", flights);
  const [filters, setFilters] = useState({
    transit: "all",
    priceRange: [0, 1000],
    flightClass: "all",
    airlines: [],
  });
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    startDate: "",
    passengers: "1",
    travelClass: "economy",
    tripType: "one-way",
  });

  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );

  const handleSearch = (value: string) => {
    const filteredOptions = locations.filter((location) =>
      location.label.toLowerCase().includes(value.toLowerCase())
    );

    setOptions(filteredOptions);
  };

  const handleFilterChange = (
    key: string,
    value: string | number | string[] | number[]
  ) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Header Section */}
      <div className="bg-white p-6 shadow-md z-10 sticky top-0">
        {/* Trip Type, Class, Passengers */}
        <div className="flex items-center justify-between md:justify-start md:space-x-4">
          {/* Back Button */}
          <Button
            type="default"
            className="rounded-full px-4 bg-gray-200 hover:bg-gray-300 flex items-center"
            icon={<ArrowLeftOutlined />}
            onClick={() => window.history.back()}
          >
            Back
          </Button>

          {/* One-way and Round-trip Buttons */}
          <div className="flex space-x-2">
            <Button
              type="primary"
              className="rounded-full px-4 bg-black text-white"
            >
              One-way
            </Button>
            <Button className="rounded-full px-4 bg-gray-200 hover:bg-gray-300">
              Round-trip
            </Button>
          </div>

          {/* Select Options */}
          <Select
            defaultValue="Economy Class"
            className="w-48"
            onChange={(value) => console.log("Flight Class Selected:", value)}
          >
            <Option value="economy">Economy Class</Option>
            <Option value="business">Business Class</Option>
            <Option value="first">First Class</Option>
          </Select>
          <Select
            defaultValue="1 Passenger"
            className="w-48"
            onChange={(value) => console.log("Passengers Selected:", value)}
          >
            <Option value="1">1 Passenger</Option>
            <Option value="2">2 Passengers</Option>
            <Option value="3">3 Passengers</Option>
          </Select>
        </div>

        {/* Search Inputs */}
        <div className="flex items-center space-x-4 mt-4">
          <AutoComplete
            options={options}
            onSearch={handleSearch}
            placeholder="Leaving From"
            className="w-full"
            onSelect={(value) => setFormData({ ...formData, from: value })}
          />

          {/* Swap Button */}
          <div className="flex items-center justify-center">
            <Button
              type="primary"
              shape="circle"
              icon={<SwapOutlined />}
              className="bg-black text-white border-none"
            />
          </div>

          {/* Going To */}
          <AutoComplete
            options={options}
            onSearch={handleSearch}
            placeholder="Going To"
            className="w-full"
            onSelect={(value) => setFormData({ ...formData, to: value })}
          />

            <DatePicker
              className="w-full"
              placeholder="Departure Date"
              onChange={(date, dateString) =>
                setFormData({
                  ...formData,
                  startDate: Array.isArray(dateString)
                    ? dateString[0]
                    : dateString,
                })
              }
            />

          {/* Search Button */}
          <Button
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
            className="bg-orange-600 text-white border-none animate-bounce"
            style={{
              animationDuration: "1s",
              animationIterationCount: "infinite",
            }}
          />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Filters Section */}
        <div className="w-1/4 bg-white p-6 shadow-lg overflow-y-auto">
          <h3 className="text-lg font-bold mb-6">Filters</h3>

          {/* Transit Options */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Transit Amount</h4>
            <Radio.Group
              onChange={(e) => handleFilterChange("transit", e.target.value)}
              value={filters.transit}
            >
              <Radio value="all">All</Radio>
              <Radio value="non-transit">Non-Transit</Radio>
              <Radio value="1-stop">1 Stop</Radio>
              <Radio value="2-stop">2 Stops</Radio>
            </Radio.Group>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Price Range</h4>
            <Slider
              range
              defaultValue={[0, 1000]}
              max={2000}
              onChange={(value) => handleFilterChange("priceRange", value)}
            />
            <div className="flex justify-between text-sm">
              <span>USD {filters.priceRange[0]}</span>
              <span>USD {filters.priceRange[1]}</span>
            </div>
          </div>

          {/* Airlines */}
          <div>
            <h4 className="font-semibold mb-2">Airlines</h4>
            <Select
              mode="multiple"
              placeholder="Select Airlines"
              className="w-full"
              onChange={(value) => handleFilterChange("airlines", value)}
            >
              <Option value="garuda">Garuda Indonesia</Option>
              <Option value="qatar">Qatar Airways</Option>
            </Select>
          </div>

          <Button type="primary" className="mt-6 w-full">
            Apply Filters
          </Button>
        </div>

        {/* Flights Section */}
        <div
          className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100"
          style={{
            minHeight: "auto",
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "#3B82F6 #E5E7EB", // Thumb and track color for Firefox
          }}
        >
          {flights?.map(
            (
              flight: {
                airline: { name: string };
                departure: {
                  iata: string;
                  airport: string;
                  scheduled: string;
                  terminal?: string;
                  gate?: string;
                  delay?: number;
                };
                arrival: {
                  iata: string;
                  airport: string;
                  scheduled: string;
                  terminal?: string;
                  gate?: string;
                };
                flight_status: string;
              },
              index: number
            ) => (
              <Card
                key={index}
                className="mb-4 shadow-md rounded-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 cursor-pointer relative"
              >
                {/* "Select Flight" Button */}
                <Button
                  type="primary"
                  className="bg-orange-500 hover:bg-orange-600 text-sm px-4 py-1 absolute top-2 right-2"
                  onClick={() =>
                    toast.success(
                      `Thanks for booking with ${flight.airline.name}!`,
                      {
                        toastId: "booking-success",
                      }
                    )
                  }
                >
                  Select Flight
                </Button>

                {/* Card Content */}
                <div className="flex">
                  <div className="relative w-1/4 mb-2">
                    <img
                      src="./banner.jpg"
                      alt="Flight"
                      className="w-full h-32 object-cover rounded-tl-md rounded-bl-md"
                    />
                    <div className="absolute top-1 left-1 bg-orange-600 text-white text-xs font-medium px-2 py-0.5 rounded">
                      {flight.flight_status === "active"
                        ? "Active Flight"
                        : "Scheduled"}
                    </div>
                  </div>

                  <div className="w-3/4 p-2">
                    <h3 className="text-md font-semibold text-blue-600">
                      {flight.airline.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {flight.departure.iata} ({flight.departure.airport}) →{" "}
                      {flight.arrival.iata} ({flight.arrival.airport})
                    </p>
                    <p className="text-sm text-gray-600">
                      {new Date(flight.departure.scheduled).toLocaleString()} →{" "}
                      {new Date(flight.arrival.scheduled).toLocaleString()}
                    </p>
                  </div>
                </div>

                <Collapse
                  bordered={false}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined
                      rotate={isActive ? 90 : 0}
                      className="text-blue-500"
                    />
                  )}
                  className="border-t border-gray-200"
                >
                  <Panel header="Flight Details" key="1" className="p-0">
                    <div className="relative mb-4">
                      <div
                        className="absolute inset-0 opacity-10 "
                        style={{
                          backgroundImage: "url('/map1.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>

                      {/* Flight Details */}
                      <div className="relative flex justify-between items-center p-3">
                        {/* Departure Information */}
                        <div className="w-1/3">
                          <p className="text-lg font-semibold text-gray-800">
                            {new Date(
                              flight.departure.scheduled
                            ).toLocaleTimeString()}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(
                              flight.departure.scheduled
                            ).toLocaleDateString()}
                          </p>
                          <p className="mt-1 text-gray-800 font-medium">
                            {flight.departure.airport}
                          </p>
                          <p className="text-sm text-gray-500">
                            Terminal {flight.departure.terminal}, Gate{" "}
                            {flight.departure.gate}
                          </p>
                        </div>

                        {/* Flight Duration and Status */}
                        <div className="flex flex-col items-center w-1/3">
                          <div className="relative w-full h-6 flex items-center justify-center">
                            <div className="w-full border-dashed border-t border-gray-400"></div>
                            <div className="absolute w-4 h-4 bg-white border border-gray-400 rounded-full flex items-center justify-center">
                              ✈️
                            </div>
                          </div>
                          <p className="text-sm text-red-500 font-medium mt-2">
                            {flight.flight_status === "active"
                              ? "On Time"
                              : "Delayed"}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            {flight.departure.delay
                              ? `Delay: ${flight.departure.delay} mins`
                              : "No Delay"}
                          </p>
                        </div>

                        {/* Arrival Information */}
                        <div className="w-1/3 text-right">
                          <p className="text-lg font-semibold text-gray-800">
                            {new Date(
                              flight.arrival.scheduled
                            ).toLocaleTimeString()}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(
                              flight.arrival.scheduled
                            ).toLocaleDateString()}
                          </p>
                          <p className="mt-1 text-gray-800 font-medium">
                            {flight.arrival.airport}
                          </p>
                          <p className="text-sm text-gray-500">
                            Terminal {flight.arrival.terminal}, Gate{" "}
                            {flight.arrival.gate}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Separator */}
                    <div className="border-t border-dashed border-gray-300 mt-4"></div>
                  </Panel>
                </Collapse>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
