import { City, Flight, FlightBooking } from "../@types/appTypes";

export const convertDateToStringOne = (date: Date): string => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}

export const convertDateToStringTwo = (yourDate: Date): string => {
    return yourDate.toISOString().split('T')[0];
}

export const getTotalFlightBookings = (bookings: FlightBooking[]) => {
    return bookings.reduce((total, booking) => {
        return total + Number(booking.nroPassengers * booking.price);
    }, 0);
}

export const checkIfFlightBooked = (bookings: FlightBooking[], flightId: number) => {
    return bookings.some(booking => booking.flightId === flightId);
}

export const getCityFromContext = (cityId: number, cities: City[]) => {
    return cities.find(city => city.cityId === cityId);
}

export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    }
    return new Intl.DateTimeFormat('en-US', options).format(date)
}

export const convertStringToDate = (date: string): Date => {
    const [year, month, day] = date.split('-');
    return new Date(Number(year), Number(month) - 1, Number(day));
}

export const convertFlightToFlightBooking = (
    flight: Flight,
    nroPassengers: number = 0
): FlightBooking => {
    return {
        flightId: flight.flightId,
        date: convertStringToDate(flight.date),
        departure: flight.departure,
        arrival: flight.arrival,
        duration: flight.duration,
        price: flight.price,
        nroPassengers: nroPassengers > 0 ? nroPassengers : 1,
        flight_from: flight.flight_from,
        flight_to: flight.flight_to
    }
}