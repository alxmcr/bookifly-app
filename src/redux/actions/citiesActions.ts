import { CitiesAction } from "../../@types/appReduxTypes"
import { City } from "../../@types/appTypes"

export const startCitiesAction = (): CitiesAction => ({
    type: "cities/list/start",
    payload: []
});

export const fillCitiesAction = (payload: City[]): CitiesAction => ({
    type: "cities/list/fill",
    payload
});

export const stopCitiesAction = (): CitiesAction => ({
    type: "cities/list/stop",
    payload: []
});

export const errorCitiesAction = (): CitiesAction => ({
    type: "cities/list/error",
    payload: []
});