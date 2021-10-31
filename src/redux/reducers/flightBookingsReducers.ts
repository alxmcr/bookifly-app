import { FlightBookingsAction, FlightBookingsState } from "../../@types/appReduxTypes";
import { FlightBooking } from "../../@types/appTypes";

export const initialStateFlightBooking: FlightBookingsState = {
    flightBookings: []
}

export const flightBookingsReducers = (
    state: FlightBookingsState = initialStateFlightBooking,
    action: FlightBookingsAction
) => {
    switch (action.type) {
        case "bookings/flight/add":
            return {
                ...state,
                flightBookings: [...state.flightBookings, action.payload as FlightBooking]
            }
        case "bookings/flight/remove":
            const flightBookingToRemove = action.payload as FlightBooking;
            const condition = (booking: FlightBooking) => booking.flightId !== flightBookingToRemove.flightId;
            return {
                ...state,
                flightBookings: state.flightBookings.filter(condition)
            }
        case "bookings/flight/clear":
            return {
                ...state,
                flightBookings: []
            }
        default:
            return state;
    }
}