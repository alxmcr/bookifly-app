import { Flight } from "../@types/appTypes";

const API_URL = import.meta.env.VITE_APP_BACKEND_API_BASE_URL;

export const getAllFlights = async (signal: AbortSignal): Promise<Flight[]> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    const url = `${API_URL}/v1/flights`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}

export const searchFlights = async (
    cityFrom: number = 0,
    cityTo: number = 0,
    date: Date | null = null,
    signal: AbortSignal
): Promise<Flight[]> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    let url = new URL(`${API_URL}/v1/flights`);
    let params = new URLSearchParams();

    if (date !== null) {
        const dateString = date.toISOString().split('T')[0];
        params.append("date", dateString)
    }
    if (cityFrom > 0) {
        params.append("flight_from", cityFrom.toString())
    }
    if (cityTo > 0) {
        params.append("flight_to", cityTo.toString())
    }

    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url.toString(), requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}
