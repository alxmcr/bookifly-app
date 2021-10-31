import { StoreEnhancer } from "redux";
import { City, FlightBooking, SearchFlight } from "./appTypes";

export interface CitiesState {
    cities: City[];
    loading: boolean;
    error: boolean;
}

export interface CitiesAction {
    type: "cities/list/start" | "cities/list/stop" | "cities/list/error" | "cities/list/fill";
    payload: City[];
}

export interface SearchFlightState {
    searchFlight: SearchFlight
}

export interface SearchFlightAction {
    type: "flights/flight/search";
    payload: SearchFlight;
}

export interface FlightBookingsState {
    flightBookings: FlightBooking[]
}

export interface FlightBookingsAction {
    type: "bookings/flight/add" | "bookings/flight/remove" | "bookings/flight/clear";
    payload: FlightBooking | {};
}

export type WindowWithDevTools = Window & {
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>
}

export interface AppReduxProviderProps {
    children: React.ReactNode;
}

export interface AppReduxState {
    cities: CitiesState,
    flights: SearchFlightState,
    bookings: FlightBookingsState
}