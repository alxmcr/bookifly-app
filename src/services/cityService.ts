import { City } from "../@types/appTypes";

const API_URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

export const getAllCities = async (signal: AbortSignal): Promise<City[]> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    const url = `${API_URL}/v1/cities`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}

export const getCityById = async (cityId: number = 0, signal: AbortSignal): Promise<City> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    const url = `${API_URL}/v1/cities/${cityId}`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}
