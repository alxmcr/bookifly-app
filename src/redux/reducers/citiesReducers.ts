import { CitiesAction, CitiesState } from "../../@types/appReduxTypes";

export const initialCitiesState: CitiesState = {
    cities: [],
    loading: false,
    error: false,
};

export const citiesReducers = (
    state: CitiesState = initialCitiesState,
    action: CitiesAction
): CitiesState => {
    switch (action.type) {
        case "cities/list/start":
            return {
                ...state,
                loading: true,
                error: false,
            };
        case "cities/list/stop":
            return {
                ...state,
                loading: false,
                error: false,
            };
        case "cities/list/error":
            return {
                ...state,
                loading: false,
                error: true,
            };
        case "cities/list/fill":
            return {
                ...state,
                cities: action.payload,
                loading: false,
                error: false,
            };
        default:
            return state;
    }
}