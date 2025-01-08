import { Button, Radio, Select, Slider } from "antd";
import React, { useState } from "react";

const { Option } = Select;

const Filter = () => {
  // const { flights } = useFlightContext();
  const [filters, setFilters] = useState({
    transit: "all",
    priceRange: [0, 1000],
    flightClass: "all",
    airlines: [],
  });

  const handleFilterChange = (
    key: string,
    value: string | number | string[] | number[]
  ) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
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
  );
};

export default Filter;
