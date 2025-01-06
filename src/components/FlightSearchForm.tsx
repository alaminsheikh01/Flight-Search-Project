// components/FlightSearchForm.tsx
import React from "react";
import { Input, Select, DatePicker, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const FlightSearchForm = () => {
  return (
    <>
      {/* Search Form */}
      <div className="relative z-20 w-full max-w-5xl -mt-20 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select placeholder="All Airlines" className="w-full">
              <Option value="airline1">Airline 1</Option>
              <Option value="airline2">Airline 2</Option>
              <Option value="airline3">Airline 3</Option>
            </Select>

            <Select placeholder="Business Class" className="w-full">
              <Option value="economy">Economy</Option>
              <Option value="business">Business</Option>
              <Option value="first">First Class</Option>
            </Select>

            <Select placeholder="One-Way" className="w-full">
              <Option value="one-way">One-Way</Option>
              <Option value="round-trip">Round-Trip</Option>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Input placeholder="From" className="w-full" />
            <Input placeholder="To" className="w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <DatePicker placeholder="Flight Date" className="w-full" />
            <Select placeholder="1 Passenger" className="w-full">
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
            >
              Search Flight
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSearchForm;
