import { combineReducers } from "redux";
import { citiesReducers } from "./citiesReducers";
import { searchFlightsReducers } from "./searchFlightsReducers";
import { flightBookingsReducers } from "./flightBookingsReducers";

export const rootReducer = combineReducers({
    cities: citiesReducers,
    flights: searchFlightsReducers,
    bookings: flightBookingsReducers
});
