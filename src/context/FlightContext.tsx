import { useState, createContext, useContext } from "react";
import { Flight, FlightContextType, FlightProviderProps } from "../types/flight";


const defaultContextValue: FlightContextType = {
  flights: [],
  setFlights: () => {},
};

export const FlightContext = createContext<FlightContextType>(defaultContextValue);

export const FlightProvider = ({ children }: FlightProviderProps) => {
  const [flights, setFlights] = useState<Flight[]>([]);

  return (
    <FlightContext.Provider value={{ flights, setFlights }}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => useContext(FlightContext);
