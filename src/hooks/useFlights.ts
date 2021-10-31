import { useEffect, useState } from "react";
import { Flight } from "../@types/appTypes";
import { searchFlights } from "../services/flightService";

export const useFlights = (
    cityFrom: number = 0,
    cityTo: number = 0,
    departureDate: Date = new Date()
) => {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [loadingFlights, setLoadingFlights] = useState(false);
    const [errorFlights, setErrorFlights] = useState(false);

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingFlights(true);

        searchFlights(cityFrom, cityTo, departureDate, signal)
            .then((response) => {
                setErrorFlights(false);
                setFlights(response);
                setLoadingFlights(false);
            }).catch(() => {
                setErrorFlights(true);
            }).finally(() => {
                setLoadingFlights(false);
            });

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [cityFrom, cityTo, departureDate])

    return { flights, loadingFlights, errorFlights };
}