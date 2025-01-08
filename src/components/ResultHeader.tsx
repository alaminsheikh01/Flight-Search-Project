import { AutoComplete, Button, DatePicker, Select } from "antd";
import React, { useState } from "react";
import { ArrowLeftOutlined, SwapOutlined, SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useFetchFlights from "../hooks/useFetch";
import { useFlightContext } from "../context/FlightContext";
import { locations } from "../utils/helpers";

const { Option } = Select;

const ResultHeader = () => {
  const router = useRouter();

  // state
  const { setFlights } = useFlightContext();
  const { fetchFlights, loading } = useFetchFlights();
  const [options, setOptions] = useState<{ label: string; value: string }[]>([]);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    startDate: "",
    passengers: "1",
    travelClass: "economy",
    tripType: "one-way",
  });


// handle search
  const handleSearch = (value: string) => {
    const filteredOptions = locations.filter((location) =>
      location.label.toLowerCase().includes(value.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  // handle form submit
  const handleFormSubmit = async () => {
    const { from, to, startDate } = formData;

    if (!from || !to || !startDate) {
      toast.warn("Please fill all fields");
      return;
    }

    const fetchedFlights = await fetchFlights(from, to, startDate);
    if (fetchedFlights) {
      setFlights(fetchedFlights);
      router.push("/result");
    }
  };

  return (
    <div className="bg-white p-6 shadow-md z-10 sticky top-0">
      <div className="flex items-center justify-between md:justify-start md:space-x-4">
        <Button
          type="default"
          className="rounded-full px-4 bg-gray-200 hover:bg-gray-300 flex items-center"
          icon={<ArrowLeftOutlined />}
          onClick={() => window.history.back()}
        >
          Back
        </Button>

        <div className="flex space-x-2">
          <Button
            type="primary"
            className="rounded-full px-4 bg-black text-white"
            onClick={() => setFormData({ ...formData, tripType: "one-way" })}
          >
            One-way
          </Button>
          <Button
            className="rounded-full px-4 bg-gray-200 hover:bg-gray-300"
            onClick={() => setFormData({ ...formData, tripType: "round-trip" })}
          >
            Round-trip
          </Button>
        </div>

        <Select
          defaultValue="Economy Class"
          className="w-48"
          onChange={(value) => setFormData({ ...formData, travelClass: value })}
        >
          <Option value="economy">Economy Class</Option>
          <Option value="business">Business Class</Option>
          <Option value="first">First Class</Option>
        </Select>
        <Select
          defaultValue="1 Passenger"
          className="w-48"
          onChange={(value) => setFormData({ ...formData, passengers: value })}
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
          placeholder="Please Type Leaving From Location..."
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
          placeholder="Please Type Going To Location..."
          className="w-full"
          onSelect={(value) => setFormData({ ...formData, to: value })}
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
          shape="circle"
          icon={<SearchOutlined />}
          className="bg-orange-600 text-white border-none animate-bounce"
          style={{
            animationDuration: "1s",
            animationIterationCount: "infinite",
          }}
          onClick={handleFormSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ResultHeader;
