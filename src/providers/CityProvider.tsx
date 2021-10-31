import { createContext } from "react";
import {
  CitiesContextProps,
  CitiesProviderProps,
} from "../@types/appContextTypes";
import { useCities } from "../hooks/useCities";

export const initialCitiesContext: CitiesContextProps = {
  cities: [],
  loadingCities: false,
  errorCities: false,
};

export const CitiesContext =
  createContext<CitiesContextProps>(initialCitiesContext);

export const CitiesProvider = ({ children }: CitiesProviderProps) => {
  const { cities, loadingCities, errorCities } = useCities();
  const value: CitiesContextProps = {
    cities,
    loadingCities,
    errorCities,
  };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};
