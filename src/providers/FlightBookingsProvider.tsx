import { createContext, useReducer } from "react";
import {
  FlightBookingsContextProps,
  FlightBookingsProviderProps,
} from "../@types/appContextTypes";
import {
  flightBookingsReducers,
  initialStateFlightBooking,
} from "../redux/reducers/flightBookingsReducers";

export const FlightBookingsContext = createContext<FlightBookingsContextProps>({
  state: initialStateFlightBooking,
  dispatch: () => {},
});

export const FlightBookingsProvider = ({
  children,
}: FlightBookingsProviderProps) => {
  const [state, dispatch] = useReducer(
    flightBookingsReducers,
    initialStateFlightBooking
  );
  const value = { state, dispatch };

  return (
    <FlightBookingsContext.Provider value={value}>
      {children}
    </FlightBookingsContext.Provider>
  );
};
