import { useState } from "react";
import { message } from "antd";

interface Flight {
  airline: {
    name: string;
  };
  departure: {
    iata: string;
    airport: string;
    scheduled: string;
  };
  arrival: {
    iata: string;
    airport: string;
    scheduled: string;
  };
  price?: number;
  duration?: string;
}

const useFetchFlights = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFlights = async (from: string, to: string, startDate: string) => {
    if (!from || !to || !startDate) {
      message.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const apiKey = "7b739d8c54084d0ade3251e0daf5f4c0";
      const response = await fetch(
        `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&dep_iata=${from}&arr_iata=${to}`
      );
      const data = await response.json();

      if (data.data) {
        setFlights(data.data);
        message.success("Flights loaded successfully");
      } else {
        message.error("No flights found");
      }
    } catch (error) {
      console.error("Error fetching flights:", error);
      message.error("Error fetching flight data");
    } finally {
      setLoading(false);
    }
  };

  return { flights, fetchFlights, loading };
};

export default useFetchFlights;
