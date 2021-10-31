import { FlightBookingsAction, FlightBookingsState, SearchFlightAction, SearchFlightState } from "./appReduxTypes";
import { City } from "./appTypes";

export interface CitiesContextProps {
    cities: City[];
    loadingCities: boolean;
    errorCities: boolean;
}

export interface CitiesProviderProps {
    children: React.ReactNode
}

export interface SearchFlightContextProps {
    state: SearchFlightState;
    dispatch: React.Dispatch<SearchFlightAction>;
}

export interface SearchFlightsProviderProps {
    children: React.ReactNode
}

export interface FlightBookingsProviderProps {
    children: React.ReactNode
}

export interface FlightBookingsContextProps {
    state: FlightBookingsState;
    dispatch: React.Dispatch<FlightBookingsAction>;
}

export interface OverlayContextProps {
    showOverlay: boolean;
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OverlayProviderProps {
    children: React.ReactNode
}

export interface SidebarContextProps {
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SidebarProviderProps {
    children: React.ReactNode
}