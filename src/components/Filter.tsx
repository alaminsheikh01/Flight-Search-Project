import { Button, Drawer, Radio, Select, Slider } from "antd";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const { Option } = Select;

const Filter = () => {
  // state
  const [filters, setFilters] = useState({
    transit: "all",
    priceRange: [0, 1000],
    flightClass: "all",
    airlines: [],
  });

  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleFilterChange = (
    key: string,
    value: string | number | string[] | number[]
  ) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <>
      {/* Desktop Filter */}
      <motion.div
        className="hidden sm:block w-1/4 bg-white p-6 shadow-lg overflow-y-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="text-lg font-bold mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Filters
        </motion.h3>

        {/* Transit Options */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
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
        </motion.div>

        {/* Price Range */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
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
        </motion.div>

        {/* Airlines */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h4 className="font-semibold mb-2">Airlines</h4>
          <Select
            mode="multiple"
            placeholder="Select Airlines"
            className="w-full"
            onChange={(value) => handleFilterChange("airlines", value)}
          >
            <Option value="garuda">Garuda Indonesia</Option>
            <Option value="qatar">Qatar Airways</Option>
            <Option value="biman">Biman Bangladesh</Option>
          </Select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button
            type="primary"
            className="mt-6 w-full hover:scale-105 transition-transform bg-orange-500"
            onClick={() => toast.success("Filter will be applied soon!")}
          >
            Apply Filters
          </Button>
        </motion.div>
      </motion.div>

      {/* Mobile Drawer */}
      <div className="block sm:hidden">
        <Button
          type="primary"
          className="bg-orange-500 w-full"
          onClick={() => setDrawerVisible(true)}
        >
          Open Filters
        </Button>
        <Drawer
          title="Filters"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
          bodyStyle={{ padding: "16px" }}
        >
          <h4 className="font-semibold mb-2">Transit Amount</h4>
          <Radio.Group
            onChange={(e) => handleFilterChange("transit", e.target.value)}
            value={filters.transit}
            className="flex flex-col mb-6"
          >
            <Radio value="all">All</Radio>
            <Radio value="non-transit">Non-Transit</Radio>
            <Radio value="1-stop">1 Stop</Radio>
            <Radio value="2-stop">2 Stops</Radio>
          </Radio.Group>

          <h4 className="font-semibold mb-2">Price Range</h4>
          <Slider
            range
            defaultValue={[0, 1000]}
            max={2000}
            onChange={(value) => handleFilterChange("priceRange", value)}
          />
          <div className="flex justify-between text-sm mb-6">
            <span>USD {filters.priceRange[0]}</span>
            <span>USD {filters.priceRange[1]}</span>
          </div>

          <h4 className="font-semibold mb-2">Airlines</h4>
          <Select
            mode="multiple"
            placeholder="Select Airlines"
            className="w-full mb-6"
            onChange={(value) => handleFilterChange("airlines", value)}
          >
            <Option value="garuda">Garuda Indonesia</Option>
            <Option value="qatar">Qatar Airways</Option>
            <Option value="biman">Biman Bangladesh</Option>
          </Select>

          <Button
            type="primary"
            className="w-full bg-orange-500"
            onClick={() => {
              setDrawerVisible(false);
              toast.success("Filter will be applied soon!");
            }}
          >
            Apply Filters
          </Button>
        </Drawer>
      </div>
    </>
  );
};

export default Filter;
