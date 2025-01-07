import { useState, createContext, useContext } from "react";

interface FlightProviderProps {
  children: React.ReactNode;
}

interface FlightContextType {
  flights: any;
  setFlights: React.Dispatch<React.SetStateAction<any>>;
}

const defaultContextValue: FlightContextType = {
  flights: null,
  setFlights: () => {},
};

export const FlightContext = createContext<FlightContextType>(defaultContextValue);

export const FlightProvider = ({ children }: FlightProviderProps) => {
  const [flights, setFlights] = useState(null);

  return (
    <FlightContext.Provider value={{ flights, setFlights }}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => useContext(FlightContext);
