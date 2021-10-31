export interface City {
    cityId: number;
    name: string;
    country: string;
}

export interface Flight {
    flightId: number;
    date: string;
    departure: string;
    arrival: string;
    duration: string;
    price: number;
    flight_from: number;
    flight_to: number;
}

export interface FlightBooking {
    flightId: number;
    date: Date;
    departure: string;
    arrival: string;
    duration: string;
    price: number;
    nroPassengers: number;
    flight_from: number;
    flight_to: number;
}

export interface SearchFlight {
    from: number;
    to: number;
    date: Date;
    passengers: number;
}