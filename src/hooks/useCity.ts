import { useEffect, useState } from "react";
import { City } from "../@types/appTypes";
import { getCityById } from "../services/cityService";

export const useCity = (cityId: number = 0) => {
    const [city, setCity] = useState<City | null>(null);
    const [loadingCity, setLoadingCity] = useState(false);
    const [errorCity, setErrorCity] = useState(false);

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingCity(true);

        getCityById(cityId, signal)
            .then((response) => {
                setCity(response);
                setLoadingCity(false);
            }).catch(() => {
                setErrorCity(true);
            }).finally(() => {
                setLoadingCity(false);
            });

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [cityId])

    return { city, loadingCity, errorCity };
}