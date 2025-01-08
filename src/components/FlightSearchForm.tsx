"use client";
import React, { useState } from "react";
import { Select, DatePicker, Button, AutoComplete } from "antd";
import { SearchOutlined, SwapOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useFetchFlights from "../hooks/useFetch";
import { useFlightContext } from "../context/FlightContext";
import { locations } from "../utils/helpers";
import { toast } from "react-toastify";
import { AutoCompleteOption } from "../types/flight";

type FormData = {
  from: string;
  to: string;
  startDate: string;
  passengers: string;
  travelClass: string;
  tripType: string;
};

const { Option } = Select;

const FlightSearchForm: React.FC = () => {
  const router = useRouter();
  const { setFlights } = useFlightContext();
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);
  const { flights, fetchFlights, loading } = useFetchFlights();

  const [formData, setFormData] = useState<FormData>({
    from: "",
    to: "",
    startDate: "",
    passengers: "1",
    travelClass: "economy",
    tripType: "one-way",
  });

  const handleSearch = (value: string) => {
    const filteredOptions = locations
      .filter((location) =>
        location.label.toLowerCase().includes(value.toLowerCase())
      )
      .map((location) => ({
        label: location.label,
        value: location.value,
      }));
    setOptions(filteredOptions);
  };

  const handleFormSubmit = async () => {
    const { from, to, startDate } = formData;

    if (!from || !to || !startDate) {
      toast.warn("Please fill in all fields");
      return;
    }

    const fetchedFlights = await fetchFlights(from, to, startDate);
    if (fetchedFlights) {
      setFlights(fetchedFlights);
      router.push("/result");
    }
  };

  return (
    <motion.div
      className="relative bg-white rounded-xl p-10 max-w-6xl mx-auto mt-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-white rounded-xl z-0"></div>

      {/* Top Navigation */}
      <motion.div
        className="relative z-10 flex justify-between items-center border-b pb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex space-x-6">
          <Button className="flex items-center text-red-500 font-medium hover:scale-105 transform transition-all">
            <span className="mr-2">✈️</span> Flight
          </Button>
          <Button className="flex items-center text-gray-500 hover:text-red-500 hover:scale-105 transform transition-all">
            <span className="mr-2">📋</span> Hotel
          </Button>
          <Button className="flex items-center text-gray-500 hover:text-red-500 hover:scale-105 transform transition-all">
            <span className="mr-2">🕋</span> Umrah
          </Button>
        </div>
      </motion.div>

      {/* Flight Options */}
      <motion.div
        className="relative z-10 flex justify-between mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="flex space-x-4">
          <Select
            className="w-72"
            defaultValue="One Way"
            onChange={(value: string) =>
              setFormData({ ...formData, tripType: value })
            }
          >
            <Option value="one-way">One Way</Option>
            <Option value="round-trip">Round Trip</Option>
          </Select>
          <Select
            className="w-72"
            defaultValue="1 Passenger"
            onChange={(value: string) =>
              setFormData({ ...formData, passengers: value })
            }
          >
            <Option value="1">1 Passenger</Option>
            <Option value="2">2 Passengers</Option>
            <Option value="3">3 Passengers</Option>
          </Select>
          <Select
            className="w-72"
            defaultValue="Economy"
            onChange={(value: string) =>
              setFormData({ ...formData, travelClass: value })
            }
          >
            <Option value="economy">Economy</Option>
            <Option value="business">Business</Option>
            <Option value="first">First Class</Option>
          </Select>
        </div>
      </motion.div>

      {/* Flight Inputs */}
      <motion.div
        className="relative z-10 flex items-center space-x-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <AutoComplete
          options={options}
          onSearch={handleSearch}
          placeholder="Please Type Leaving From Location..."
          className="w-full"
          onSelect={(value: string) => setFormData({ ...formData, from: value })}
        />

        {/* Swap Button */}
        <motion.div
          className="flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            type="primary"
            shape="circle"
            icon={<SwapOutlined />}
            className="bg-black text-white border-none"
          />
        </motion.div>

        <AutoComplete
          options={options}
          onSearch={handleSearch}
          placeholder="Please Type Going To Location..."
          className="w-full"
          onSelect={(value: string) => setFormData({ ...formData, to: value })}
        />

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

        {/* Search Button */}
        <Button
          type="primary"
          icon={<SearchOutlined />}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-2"
          onClick={handleFormSubmit}
          loading={loading}
        >
          Search
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default FlightSearchForm;
