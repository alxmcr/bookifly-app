import { useContext } from "react";
import { useSelector } from "react-redux";
import { AppReduxState } from "../../../@types/appReduxTypes";
import { FlightBooking } from "../../../@types/appTypes";
import { getTotalFlightBookings } from "../../../helpers/appHelpers";
import { SidebarContext } from "../../../providers/SidebarProvider";
import { CustomerFormCard } from "../../cards/CustomerFormCard";
import { CloseIcon } from "../../icons/CloseIcon";
import "./AppSidebar.scss";

export const AppSidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  const flightBookings = useSelector<AppReduxState>(
    (state) => state.bookings.flightBookings
  ) as FlightBooking[];
  const total = getTotalFlightBookings(flightBookings);
  const sidebarClass = showSidebar ? "sidebar--show" : "sidebar";
  const handleCloseSidebar = () => setShowSidebar(false);
  return (
    <aside className={sidebarClass} id="menu">
      <div className="sidebar__header">
        <div className="sidebar__brand">
          <h3 className="sidebar__app">Bookifly</h3>
        </div>
        <button
          className="sidebar__button"
          onClick={handleCloseSidebar}
          id="btnCloseMenu"
        >
          <CloseIcon className="sidebar__icon" width={15} height={15} />
        </button>
      </div>
      <div className="sidebar__body">
        <CustomerFormCard total={total} />
      </div>
    </aside>
  );
};
