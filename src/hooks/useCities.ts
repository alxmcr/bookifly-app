import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { City } from "../@types/appTypes";
import { errorCitiesAction, fillCitiesAction, startCitiesAction, stopCitiesAction } from "../redux/actions/citiesActions";
import { getAllCities } from "../services/cityService";

export const useCities = () => {
    const dispatch = useDispatch();
    const [cities, setCities] = useState<City[]>([]);
    const [loadingCities, setLoadingCities] = useState(false);
    const [errorCities, setErrorCities] = useState(false);

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingCities(true);
        dispatch(startCitiesAction())
        getAllCities(signal)
            .then((response) => {
                setErrorCities(false);
                setCities(response);
                dispatch(fillCitiesAction(response));
                setLoadingCities(false);
            }).catch(() => {
                setErrorCities(true);
                dispatch(errorCitiesAction());
            }).finally(() => {
                setLoadingCities(false);
                dispatch(stopCitiesAction())
            });

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [])

    return { cities, loadingCities, errorCities };
}