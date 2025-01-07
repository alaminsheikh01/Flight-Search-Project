// components/FlightSearchForm.tsx
import React, { useState } from "react";
import { Select, DatePicker, Button, AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Results from "@/app/result/page";
import { useRouter } from "next/navigation";
import useFetchFlights from "../hooks/useFetch";

const { Option } = Select;
const { RangePicker } = DatePicker;

const FlightSearchForm = () => {
  const route = useRouter(); // Get the route object
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const { flights, fetchFlights, loading } = useFetchFlights();
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    startDate: "",
    endDate: "",
    passengers: "1",
    travelClass: "economy",
    tripType: "one-way",
    airline: "",
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

    // Use the custom hook to fetch flights
    await fetchFlights(from, to, startDate);

    // Navigate to the results page after fetching
    if (flights.length > 0) {
      route.push("/result");
    }
  };

  return (
    <div className="relative z-20 w-full max-w-5xl -mt-20 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select
            placeholder="All Airlines"
            className="w-full"
            onChange={(value) => setFormData({ ...formData, airline: value })}
          >
            <Option value="airline1">Airline 1</Option>
            <Option value="airline2">Airline 2</Option>
            <Option value="airline3">Airline 3</Option>
          </Select>

          <Select
            placeholder="Business Class"
            className="w-full"
            onChange={(value) =>
              setFormData({ ...formData, travelClass: value })
            }
          >
            <Option value="economy">Economy</Option>
            <Option value="business">Business</Option>
            <Option value="first">First Class</Option>
          </Select>

          <Select
            placeholder="One-Way"
            className="w-full"
            defaultValue="one-way"
            onChange={(value) => setFormData({ ...formData, tripType: value })}
          >
            <Option value="one-way">One-Way</Option>
            <Option value="round-trip">Round-Trip</Option>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <AutoComplete
            options={options}
            onSearch={handleSearch}
            placeholder="Flying From"
            className="w-full"
            onSelect={(value) => setFormData({ ...formData, from: value })}
          />
          <AutoComplete
            options={options}
            onSearch={handleSearch}
            placeholder="Flying To"
            className="w-full"
            onSelect={(value) => setFormData({ ...formData, to: value })}
          />
          <RangePicker
            className="w-full"
            onChange={(dates, dateStrings) =>
              setFormData({
                ...formData,
                startDate: dateStrings[0],
                endDate: dateStrings[1],
              })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Select
            placeholder="1 Passenger"
            className="w-full"
            defaultValue="1"
            onChange={(value) =>
              setFormData({ ...formData, passengers: value })
            }
          >
            <Option value="1">1 Passenger</Option>
            <Option value="2">2 Passengers</Option>
            <Option value="3">3 Passengers</Option>
            <Option value="4">4 Passengers</Option>
          </Select>
        </div>

        <div className="flex justify-center mt-6">
          <Button
            type="primary"
            icon={<SearchOutlined />}
            className="bg-orange-500 hover:bg-orange-600 px-10 py-3 text-white rounded-md text-lg font-medium"
            onClick={handleFormSubmit}
            loading={loading}
          >
            Search Flight
          </Button>
        </div>
      </div>

      {/* Render Results Component */}
      {flights.length > 0 && <Results flights={flights} />}
    </div>
  );
};

export default FlightSearchForm;
