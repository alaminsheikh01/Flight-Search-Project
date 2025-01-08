export type Flight = {
  airline: {
    name: string;
  };
  departure: {
    iata: string;
    airport: string;
    scheduled: string;
    terminal?: string;
    gate?: string;
    delay?: number;
  };
  arrival: {
    iata: string;
    airport: string;
    scheduled: string;
    terminal?: string;
    gate?: string;
  };
  flight_status: string;
};
export interface FlightProviderProps {
  children: React.ReactNode;
}

export interface FlightContextType {
  flights: Flight[];
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
}

export type Destination = {
  name: string;
  image: string;
  flag: string;
};