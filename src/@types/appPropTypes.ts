import { City, Flight, FlightBooking } from "./appTypes";

export interface IconProps {
    className: string;
    width: number;
    height: number;
}

export interface CitiesSelectProps {
    id: string
    cities: City[];
    cityId: number;
    setCityId: (cityId: number) => void;
}

export interface FlightDateFormBoxProps {
    label: string;
    htmlFor: string;
    date: Date;
    setDate: (date: Date) => void;
}

export interface FlightNroPassengersBoxProps {
    label: string;
    htmlFor: string;
    passengers: number;
    setPassengers: (passengers: number) => void;
}

export interface FlightCitySelectBoxProps {
    label: string;
    htmlFor: string;
    cityId: number;
    setCityId: (cityId: number) => void;
    cities: City[];
}

export interface CityCardProps {
    cityId: number;
}

export interface FlightCardProps {
    flight: Flight
}

export interface CitiesContainerProps {
    fromCityId: number;
    toCityId: number;
}

export interface FlightsListProps {
    flights: Flight[];
}

export interface FlightsContainerProps {
    cityFrom: number,
    cityTo: number,
    departureDate: Date
}

export interface FlightBookingCardProps {
    flightBooking: FlightBooking;
}

export interface FlightBookingsTableProps {
    flightBookings: FlightBooking[];
}

export interface AppOverlayProps {
    showOverlay: boolean;
    children: React.ReactNode;
}

export interface CustomerFormCardProps {
    total: number
}

export interface AppSpinnerProps {
    color: "primary" | "secondary";
}

export interface AppMessageProps {
    type: "message" | "info" | "error"
    message: string
}

export interface MessageContainerProps {
    type: "message" | "info" | "error";
    message: string;
    children?: React.ReactNode;
}

export interface LogisticBoxProps {
    cities: City[];
    cityId: number,
    time: string
}