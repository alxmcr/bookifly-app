import { useDispatch, useSelector } from "react-redux";
import { City } from "../../../@types/appTypes";
import { FlightBookingCardProps } from "../../../@types/appPropTypes";
import { AppReduxState } from "../../../@types/appReduxTypes";
import { formatDate, getCityFromContext } from "../../../helpers/appHelpers";
import { removeFlightBooking } from "../../../redux/actions/flightBookingsActions";
import { AirplaneBigIcon } from "../../icons/AirplaneBigIcon";
import { CloseIcon } from "../../icons/CloseIcon";
import "./FlightBookingCard.scss";

export const FlightBookingCard = ({
  flightBooking,
}: FlightBookingCardProps) => {
  const dispatch = useDispatch();
  const cities = useSelector<AppReduxState>(
    (state) => state.cities.cities
  ) as City[];
  const cityFrom = getCityFromContext(flightBooking?.flight_from, cities);
  const cityTo = getCityFromContext(flightBooking?.flight_to, cities);
  const subTotal = flightBooking?.price * flightBooking?.nroPassengers;
  const handleDeleteFlightBooking = () => {
    dispatch(removeFlightBooking(flightBooking));
  };

  return (
    <article className="flight-booking-card" id={`${flightBooking?.flightId}`}>
      <header className="flight-booking-card__header">
        <p className="flight-booking-card__date">
          {formatDate(flightBooking?.date)}
        </p>
      </header>
      <div className="flight-booking-card__content">
        <div className="flight-booking-card__schedule">
          <div className="flight-booking-card__body">
            <div className="flight-booking-card__location">
              <p className="flight-booking-card__time">
                {flightBooking?.departure}
              </p>
              <p className="flight-booking-card__label">
                {cityFrom?.name}, {cityFrom?.country}
              </p>
            </div>
            <div className="flight-booking-card__separator">
              <AirplaneBigIcon
                className="flight-booking-card__icon-separator"
                width={30}
                height={30}
              />
            </div>
            <div className="flight-booking-card__location">
              <p className="flight-booking-card__time">
                {flightBooking?.arrival}
              </p>
              <p className="flight-booking-card__label">
                {cityTo?.name}, {cityTo?.country}
              </p>
            </div>
          </div>
        </div>
        <div className="flight-booking-card__logistics">
          <div className="flight-booking-card__passengers">
            <p className="flight-booking-card__quantity">
              {flightBooking?.nroPassengers}
            </p>
            <p className="flight-booking-card__label">Nro. Personas</p>
          </div>
          <div className="flight-booking-card__price">
            <p className="flight-booking-card__subtotal">${subTotal}</p>
            <p className="flight-booking-card__label">
              P. Unitario: ${flightBooking?.price}
            </p>
          </div>
        </div>
        <div className="flight-booking-card__actions">
          <button
            className="flight-booking-card__button"
            onClick={handleDeleteFlightBooking}
          >
            <CloseIcon
              className="flight-booking-card__icon"
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>
    </article>
  );
};
