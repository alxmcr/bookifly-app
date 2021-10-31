import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppReduxState } from "../../../@types/appReduxTypes";
import { AirplaneSmallIcon } from "../../icons/AirplaneSmallIcon";
import { CartIcon } from "../../icons/CartIcon";
import "./AppNavegation.scss";

export const AppNavegation = () => {
  const flightBookingsLength = useSelector<AppReduxState>(
    (state) => state.bookings.flightBookings.length
  );

  return (
    <nav className="app-navigation">
      <ul className="app-navigation__list">
        <li className="app-navigation__item">
          <NavLink className="app-navigation__link" to="/flights">
            <AirplaneSmallIcon
              className="app-navigation__icon"
              width={15}
              height={15}
            />
            <span className="app-navigation__text-link">Vuelos</span>
          </NavLink>
        </li>
        <li className="app-navigation__item">
          <NavLink className="app-navigation__link" to="/bookings">
            <CartIcon className="app-navigation__icon" width={15} height={15} />
            <span className="app-navigation__text-link">
              ({flightBookingsLength})
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
