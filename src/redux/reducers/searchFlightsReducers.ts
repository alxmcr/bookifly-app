import { SearchFlightAction, SearchFlightState } from "../../@types/appReduxTypes";

export const initialStateSearchFlight: SearchFlightState = {
    searchFlight: {
        from: 0,
        to: 0,
        date: new Date(),
        passengers: 0,
    }
}

export const searchFlightsReducers = (state: SearchFlightState = initialStateSearchFlight, action: SearchFlightAction) => {
    switch (action.type) {
        case "flights/flight/search":
            return {
                ...state,
                searchFlight: action.payload
            }
        default:
            return state;
    }
}