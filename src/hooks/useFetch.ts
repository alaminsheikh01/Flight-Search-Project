import { useState } from "react";
import { toast } from "react-toastify";

const useFetchFlights = () => {
  const [flights, setFlights] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchFlights = async (from: string, to: string, startDate: string) => {
    if (!from || !to || !startDate) {
      toast.warn("Please fill in all required fields");
      return null;
    }

    setLoading(true);
    try {
      const apiKey = "7b739d8c54084d0ade3251e0daf5f4c0"; // For uploading to GitHub for your review, I did not add this into the .env file
      const response = await fetch(
        `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&dep_iata=${from}&arr_iata=${to}`
      );
      const data = await response.json();

      if (data?.data?.length > 0) {
        setFlights(data?.data);
        toast.success("Flights loaded successfully");
        return data?.data;
      } else {
        toast.warn("No flights found, please try different locations");
        setFlights(null);
        return null; 
      }
    } catch (error) {
      console.error("Error fetching flights:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { flights, fetchFlights, loading };
};

export default useFetchFlights;
