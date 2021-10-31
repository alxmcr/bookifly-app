import { useDispatch, useSelector } from "react-redux";
import { FlightCardProps } from "../../../@types/appPropTypes";
import { AppReduxState } from "../../../@types/appReduxTypes";
import { City, FlightBooking } from "../../../@types/appTypes";
import {
  checkIfFlightBooked,
  convertFlightToFlightBooking,
  convertStringToDate,
  formatDate,
} from "../../../helpers/appHelpers";
import {
  addFlightBooking,
  removeFlightBooking,
} from "../../../redux/actions/flightBookingsActions";
import { LogisticBox } from "../../boxes/LogisticBox";
import { AirplaneBigIcon } from "../../icons/AirplaneBigIcon";
import { CartIcon } from "../../icons/CartIcon";
import "./FlightCard.scss";

export const FlightCard = ({ flight }: FlightCardProps) => {
  const dispatch = useDispatch();
  const flightBookings = useSelector<AppReduxState>(
    (state) => state.bookings.flightBookings
  ) as FlightBooking[];
  const passengers = useSelector<AppReduxState>(
    (state) => state.flights.searchFlight.passengers
  ) as number;
  const cities = useSelector<AppReduxState>(
    (state) => state.cities.cities
  ) as City[];
  const flightBooking: FlightBooking = convertFlightToFlightBooking(
    flight,
    passengers
  );
  const flightDate = convertStringToDate(flight.date);

  const handleAddToCart = () => {
    dispatch(addFlightBooking(flightBooking));
  };
  const handleRemoveToCart = () => {
    dispatch(removeFlightBooking(flightBooking));
  };

  return (
    <article className="flight-card" id={`${flight.flightId}`}>
      <header className="flight-card__header">
        <p className="flight-card__date">{formatDate(flightDate)}</p>
      </header>
      <div className="flight-card__body">
        <LogisticBox
          cities={cities}
          cityId={flight?.flight_from}
          time={flight?.departure}
        />
        <div className="flight-card__separator">
          <AirplaneBigIcon
            className="flight-card__icon"
            width={30}
            height={30}
          />
        </div>
        <LogisticBox
          cities={cities}
          cityId={flight?.flight_to}
          time={flight?.arrival}
        />
      </div>
      <footer className="flight-card__actions">
        {checkIfFlightBooked(flightBookings, flight.flightId) ? (
          <button
            className="flight-card__button flight-card__button--active"
            onClick={handleRemoveToCart}
          >
            Quitar al carrito
          </button>
        ) : (
          <button className="flight-card__button" onClick={handleAddToCart}>
            <CartIcon className="flight-card__icon" width={15} height={15} />
            Añadir al carrito
          </button>
        )}
        <p className="flight-card__price">(${flight.price} / persona)</p>
      </footer>
    </article>
  );
};
