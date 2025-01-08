import { Button, Card, Collapse } from "antd";
import React from "react";
import { toast } from "react-toastify";
import { useFlightContext } from "../context/FlightContext";
import { CaretRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Flight } from "../types/flight";

const { Panel } = Collapse;


const FlightCard: React.FC = () => {
  
  const { flights }: { flights: Flight[] } = useFlightContext();

  return (
    <div
      className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-orange-600"
      style={{
        minHeight: "auto",
        scrollbarWidth: "thin", // For Firefox
        scrollbarColor: "#f55c39 #E5E7EB", // Thumb and track color for Firefox
      }}
    >
      {flights?.map((flight, index) => (
        <Card
          key={index}
          className="mb-4 shadow-md rounded-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 cursor-pointer relative"
        >
          {/* "Select Flight" Button */}
          <Button
            type="primary"
            className="bg-orange-500 hover:bg-orange-600 text-sm px-4 py-1 absolute top-2 right-2"
            onClick={() =>
              toast.success(`Thanks for booking with ${flight.airline.name}!`, {
                toastId: `booking-success-${index}`,
              })
            }
          >
            Select Flight
          </Button>

          {/* Card Content */}
          <div className="flex">
            <div className="relative w-1/4 mb-2">
              <Image
                src="/images/banner.jpg"
                alt="Flight"
                width={120}
                height={120}
                className="w-full h-32 object-cover rounded-tl-md rounded-bl-md"
              />
              <div className="absolute top-1 left-1 bg-orange-600 text-white text-xs font-medium px-2 py-0.5 rounded">
                {flight?.flight_status === "active" ? "Active Flight" : "Scheduled"}
              </div>
            </div>

            <div className="w-3/4 p-2">
              <h3 className="text-md font-semibold text-blue-600">{flight.airline.name}</h3>
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
              <CaretRightOutlined rotate={isActive ? 90 : 0} className="text-blue-500" />
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
                      {new Date(flight.departure.scheduled).toLocaleTimeString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(flight.departure.scheduled).toLocaleDateString()}
                    </p>
                    <p className="mt-1 text-gray-800 font-medium">{flight.departure.airport}</p>
                    <p className="text-sm text-gray-500">
                      Terminal {flight?.departure?.terminal || "N/A"}, Gate{" "}
                      {flight?.departure?.gate || "N/A"}
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
                      {flight?.flight_status === "active" ? "On Time" : "Delayed"}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {flight?.departure?.delay
                        ? `Delay: ${flight?.departure?.delay} mins`
                        : "No Delay"}
                    </p>
                  </div>

                  {/* Arrival Information */}
                  <div className="w-1/3 text-right">
                    <p className="text-lg font-semibold text-gray-800">
                      {new Date(flight.arrival.scheduled).toLocaleTimeString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(flight.arrival.scheduled).toLocaleDateString()}
                    </p>
                    <p className="mt-1 text-gray-800 font-medium">{flight.arrival.airport}</p>
                    <p className="text-sm text-gray-500">
                      Terminal {flight?.arrival?.terminal || "N/A"}, Gate{" "}
                      {flight?.arrival?.gate || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Horizontal Separator */}
              <div className="border-t border-dashed border-gray-300 mt-4"></div>
            </Panel>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};

export default FlightCard;
