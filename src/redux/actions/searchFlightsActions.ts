import { SearchFlightAction } from "../../@types/appReduxTypes";
import { SearchFlight } from "../../@types/appTypes";

export const searchFlightsActions = (searchFlight: SearchFlight): SearchFlightAction => ({
    type: "flights/flight/search",
    payload: searchFlight
})