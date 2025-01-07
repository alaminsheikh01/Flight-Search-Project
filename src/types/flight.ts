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