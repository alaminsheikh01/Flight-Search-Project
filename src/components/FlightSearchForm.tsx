"use client";
import React, { useState } from "react";
import { Select, DatePicker, Button, AutoComplete } from "antd";
import { SearchOutlined, SwapOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import useFetchFlights from "../hooks/useFetch";
import { useFlightContext } from "../context/FlightContext";

const { Option } = Select;

const FlightSearchForm = () => {
  const router = useRouter();
  const { setFlights } = useFlightContext();
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const { flights, fetchFlights, loading } = useFetchFlights();
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    startDate: "",
    passengers: "1",
    travelClass: "economy",
    tripType: "one-way",
  });

  const handleSearch = (value: string) => {
    const locations = [
      { label: "New York, USA (JFK)", value: "JFK" },
      { label: "Los Angeles, USA (LAX)", value: "LAX" },
      { label: "London, UK (LHR)", value: "LHR" },
      { label: "Paris, France (CDG)", value: "CDG" },
      { label: "Tokyo, Japan (HND)", value: "HND" },
      { label: "Sydney, Australia (SYD)", value: "SYD" },
    ];

    const filteredOptions = locations.filter((location) =>
      location.label.toLowerCase().includes(value.toLowerCase())
    );

    setOptions(filteredOptions);
  };

  const handleFormSubmit = async () => {
    const { from, to, startDate } = formData;
  
    if (!from || !to || !startDate) {
      alert("Please fill in all required fields");
      return;
    }
  
    const fetchedFlights = await fetchFlights(from, to, startDate);
    if (fetchedFlights) {
      setFlights(fetchedFlights);
      router.push("/result");
    }
  };
  

  return (
    <div className="bg-white shadow-md rounded-lg p-10 max-w-6xl mx-auto">
      {/* Top Navigation */}
      <div className="flex justify-between items-center border-b pb-3">
        <div className="flex space-x-6">
          <Button className="flex items-center text-red-500 font-medium">
            <span className="mr-2">✈️</span> Flight
          </Button>
          <Button className="flex items-center text-gray-500 hover:text-red-500">
            <span className="mr-2">📋</span> Hotel
          </Button>
          <Button className="flex items-center text-gray-500 hover:text-red-500">
            <span className="mr-2">🕋</span> Umrah
          </Button>
        </div>
      </div>

      {/* Flight Options */}
      <div className="flex justify-between mt-4">
        <div className="flex space-x-4">
          <Select
            className="w-80"
            defaultValue="One Way"
            onChange={(value) => setFormData({ ...formData, tripType: value })}
          >
            <Option value="one-way">One Way</Option>
            <Option value="round-trip">Round Trip</Option>
          </Select>
          <Select
            className="w-80"
            defaultValue="1 Passenger"
            onChange={(value) =>
              setFormData({ ...formData, passengers: value })
            }
          >
            <Option value="1">1 Passenger</Option>
            <Option value="2">2 Passengers</Option>
            <Option value="3">3 Passengers</Option>
          </Select>
          <Select
            className="w-80"
            defaultValue="Economy"
            onChange={(value) =>
              setFormData({ ...formData, travelClass: value })
            }
          >
            <Option value="economy">Economy</Option>
            <Option value="business">Business</Option>
            <Option value="first">First Class</Option>
          </Select>
        </div>
      </div>

      {/* Flight Inputs */}
      <div className="grid grid-cols-4 gap-4 mt-4 items-center">
        <AutoComplete
          options={options}
          onSearch={handleSearch}
          placeholder="Leaving From"
          className="w-full"
          onSelect={(value) => setFormData({ ...formData, from: value })}
        />
        <div className="flex items-center space-x-2">
          <SwapOutlined className="text-gray-500" />
          <AutoComplete
            options={options}
            onSearch={handleSearch}
            placeholder="Going To"
            className="w-full"
            onSelect={(value) => setFormData({ ...formData, to: value })}
          />
        </div>
        <DatePicker
          className="w-full"
          placeholder="Departure Date"
          onChange={(date, dateString) =>
            setFormData({
              ...formData,
              startDate: Array.isArray(dateString) ? dateString[0] : dateString,
            })
          }
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-2"
          onClick={handleFormSubmit}
          loading={loading}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default FlightSearchForm;
