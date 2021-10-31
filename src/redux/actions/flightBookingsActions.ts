import { FlightBookingsAction } from "../../@types/appReduxTypes";
import { FlightBooking } from "../../@types/appTypes";

export const addFlightBooking = (flightBooking: FlightBooking): FlightBookingsAction => {
    return {
        type: "bookings/flight/add",
        payload: flightBooking
    };
}

export const removeFlightBooking = (flightBooking: FlightBooking): FlightBookingsAction => {
    return {
        type: "bookings/flight/remove",
        payload: flightBooking
    };
}

export const clearFlightBookings = (): FlightBookingsAction => {
    return {
        type: "bookings/flight/clear",
        payload: {}
    };
}