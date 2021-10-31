import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, EmptyObject, Store } from "redux";
import {
  AppReduxState,
  CitiesAction,
  FlightBookingsAction,
  SearchFlightAction,
} from "../@types/appReduxTypes";
import { Flight } from "../@types/appTypes";
import { FlightCard } from "../components/cards/FlightCard";
import { rootReducer } from "../redux/reducers";

const mockFlight: Flight = {
  flightId: 1,
  date: "2021-11-01",
  departure: "08:00:00",
  arrival: "10:00:00",
  duration: "02:00:00",
  price: 500.0,
  flight_from: 1,
  flight_to: 2,
};

let reduxStore: Store<
  EmptyObject & AppReduxState,
  CitiesAction | SearchFlightAction | FlightBookingsAction
>;

// set up a fake store for all our tests
beforeEach(() => {
  reduxStore = createStore(rootReducer);
});

describe("Testing: Flight card", () => {
  test("render flight card", () => {
    const { getByText } = render(
      <Provider store={reduxStore}>
        <FlightCard flight={mockFlight} />
      </Provider>
    );
    const date = getByText("Nov 01, 2021");
    const departure = getByText("08:00:00");
    const arrival = getByText("10:00:00");
    const price = getByText("($500 / persona)");

    expect(date).toBeInTheDocument();
    expect(departure).toBeInTheDocument();
    expect(arrival).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  test("add flight to cart", () => {
    const { getByText } = render(
      <Provider store={reduxStore}>
        <FlightCard flight={mockFlight} />
      </Provider>
    );
    const date = getByText("Nov 01, 2021");
    const departure = getByText("08:00:00");
    const arrival = getByText("10:00:00");
    const price = getByText("($500 / persona)");
    const btnAddToCart = getByText("Añadir al carrito");
    
    expect(date).toBeInTheDocument();
    expect(departure).toBeInTheDocument();
    expect(arrival).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(btnAddToCart).toBeInTheDocument();
    
    fireEvent.click(btnAddToCart);
    const btnRemoveFromCart = getByText("Quitar al carrito");
    expect(btnRemoveFromCart).toBeInTheDocument();
  });
});
