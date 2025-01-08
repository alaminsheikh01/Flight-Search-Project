export interface Flight {
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

export interface FlightProviderProps {
  children: React.ReactNode;
}

export interface FlightContextType {
  flights: Flight[];
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
}