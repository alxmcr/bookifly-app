import { createContext, useReducer } from "react";
import {
  SearchFlightContextProps,
  SearchFlightsProviderProps,
} from "../@types/appContextTypes";
import {
  initialStateSearchFlight,
  searchFlightsReducers,
} from "../redux/reducers/searchFlightsReducers";

export const SearchFlightsContext = createContext<SearchFlightContextProps>({
  state: initialStateSearchFlight,
  dispatch: () => {},
});

export const SearchFlightsProvider = ({
  children,
}: SearchFlightsProviderProps) => {
  const [state, dispatch] = useReducer(
    searchFlightsReducers,
    initialStateSearchFlight
  );
  const value = { state, dispatch };

  return (
    <SearchFlightsContext.Provider value={value}>
      {children}
    </SearchFlightsContext.Provider>
  );
};
